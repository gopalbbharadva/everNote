import firestoreRef from "../src/config";
import firebase from "firebase";
import "./App.css";
import React from "react";
import Editor from "./Editor/Editor";
import Sidebar from "./Sidebar/Sidebar";

// const firebase=require('firebase');
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      note: [],
    };
  }
  render() {
    return (
      <div className="app-container">
        <Sidebar
          selectNote={this.selectNote}
          deleteNote={this.deleteNote}
          makeNewNote={this.makeNewNote}
          notes={this.state.note}
          selectedNoteIndex={this.state.selectedNoteIndex}
        ></Sidebar>
        {this.state.selectedNote ? (
          <Editor
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            note={this.state.note}
            noteUpdate={this.noteUpdate}
          ></Editor>
        ) : null}
      </div>
    );
  }

  componentDidMount = () => {
    firestoreRef
      .collection("notes")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const notesData = snap.docs.map((item) => {
          const data = item.data();
          data["id"] = item.id; 
          return data;
        });
        // console.log(notesData);
        this.setState({
          note: notesData,
        });
      });
  };

  // selecting new note => function
  selectNote = (note, index) => {
    this.setState({
      selectedNote: note,
      selectedNoteIndex: index,
    });
  };

  // updating new note => function
  noteUpdate = (id, noteobj) => {
    firestoreRef.collection("notes").doc(id).update({
      title: noteobj.title,
      body: noteobj.body,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  // making new note => function.
  makeNewNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };

    const noteFbRes = await firestoreRef.collection("notes").add({
      title: note.title,
      body: note.body,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const newNoteId = noteFbRes.id;
    this.setState({
      note: [...this.state.note, note],
    });

    const newNoteIndex = this.state.note.indexOf(
      this.state.note.filter((_note) => _note.id === newNoteId)[0]
    );
    this.setState({
      selectedNote: this.state.note[newNoteIndex],
      selectedNoteIndex: newNoteIndex,
    });
  };

  // deleting  new note => function.
  deleteNote = async (note) => {
    const noteindex = this.state.note.indexOf(note);
    await this.setState({
      note: this.state.note.filter((_note) => _note !== note),
    });
    if (this.state.selectedNoteIndex === noteindex)
      this.setState({
        selectedNoteIndex: 0,
        selectedNote: 0,
      });
    // It is called when we delete note is above the selected note.
    else if (this.state.selectedNoteIndex > noteindex) {
      this.selectNote(
        this.state.note[this.state.selectedNoteIndex - 1],
        this.state.selectedNoteIndex - 1
      );
      console.log("skdk", this.state.note.length);
    }
    // It is called when we delete note is below the selected note.
    else if (this.state.selectedNoteIndex < noteindex) {
      this.selectNote(
        this.state.note[this.state.selectedNoteIndex],
        this.state.selectedNoteIndex
      );
    } else {
      this.setState({
        selectedNoteIndex: null,
        selectedNote: null,
      });
      console.log(this.state.note.length);
    }
    firestoreRef.collection("notes").doc(note.id).delete();
  };
}
export default App;
