import React from "react";
import style from "../Sidebar/style";
import { Button, Divider, List, withStyles } from "@material-ui/core";
import Sidebaritem from "../Sidebaritem/Sidebaritem";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button className={classes.newNoteBtn} onClick={this.addNewNote}>
            {this.state.addingNote ? "Cancel note" : "Add New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                onKeyUp={(e) => this.updateTitle(e)}
                placeholder="Enter note here.."
              ></input>
              <Button
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
                    selecteNote={this.selectNote}
                    delteNote={this.deleteNote}
                  >
                      
                  </Sidebaritem>
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
    });
  };

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  newNote = () => {
    console.log(this.state);
  };

  selectNote = () => console.log("Note selected");
  deleteNote = () => console.log("Note deleted");
}

export default withStyles(style)(Sidebar);
