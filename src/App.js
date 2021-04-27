import firestoreRef from "../src/config";
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
          notes={this.state.note}
          selectedNoteIndex={this.state.selectedNoteIndex}
        ></Sidebar>
        <Editor></Editor>
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
      this.setState({
        note: notesData,
      });
    });
  };
}
export default App;
