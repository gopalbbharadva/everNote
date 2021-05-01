import React from "react";
import style from "../Sidebar/style";
import { Button, Divider, List, withStyles } from "@material-ui/core";
import Sidebaritem from "../Sidebaritem/Sidebaritem";
import '../Sidebar/style.css';
import MediaQuery from 'react-responsive'

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
      flag: false,
    };
  }
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        
        <div className="sidebarContainer">
          <Button
            className={
              this.state.flag ? classes.newNoteBtnCancel : classes.newNoteBtn
            }
            onClick={this.addNewNote}
          >
            {this.state.addingNote ? "Cancel note" : "Add New Note"}
          </Button>
          {this.state.addingNote ? (
            <div >
              <input
                type="text"
                className={classes.newNoteInput}
                onKeyUp={(e) => this.updateTitle(e)}
                placeholder="Enter note here.."
              ></input>
              <Button
                disabled={!this.state.title}
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((currentNote, index) => {
              return (
                <div key={index}>
                  <Sidebaritem
                    note={currentNote}
                    index={index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></Sidebaritem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else return <div></div>;
  }

  addNewNote = () => {
    this.setState({
      addingNote: !this.state.addingNote,
      title: null,
      flag: !this.state.flag,
    });
    console.log(this.state.flag);
  };

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  newNote = () => {
    this.props.makeNewNote(this.state.title);
    this.setState({ title: null, addingNote: false, flag: false });
  };

  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(style)(Sidebar);
