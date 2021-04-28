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
      note: null,
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
    firestoreRef.collection("notes").onSnapshot((snap) => {
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

  selectNote = (note, index) => {
    this.setState({
      selectedNote: note,
      selectedNoteIndex: index,
    });
  };

  noteUpdate = (id, noteobj) => {
    firestoreRef.collection("notes").doc(id).update({
      title: noteobj.title,
      body: noteobj.body,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  makeNewNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };

    const noteFbRes = await firestoreRef.collection("notes").add({
      title: note.title,
      body: note.body,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
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

  deleteNote = async (note) => {
    const noteindex = this.state.note.indexOf(note);
    await this.setState({
      note: this.state.note.filter((_note) => _note !== note),
    });
    if (this.state.selectedNoteIndex === noteindex)
      this.setState({
        selectedNoteIndex: null,
        selectedNote: null,
      });
    else if (this.state.note.length > 0) {
      this.selectNote(
        this.state.note[this.state.selectedNoteIndex - 1],
        this.state.selectedNoteIndex - 1
      );
      console.log("skdk",this.state.note.length);
    } else {
      this.setState({
        selectedNoteIndex: null,
        selectedNote: null,
      });
      console.log(this.state.note.length);
    }
    firestoreRef.collection("notes").doc(note.id).  delete();
  };
}
export default App;
