import React from "react";
import style from "../Sidebaritem/style";
import { ListItem, ListItemText, withStyles } from "@material-ui/core";
import "../helper";
import { removeHTMLTags } from "../helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Sidebaritem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     date: null,
  //     time: null,
  //   };
  // }

  render() {
    const { note, index, selectedNoteIndex, classes } = this.props;

    // var date = note.createdAt;
    // date = new Date(date.toDate());
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // var time = hours + ":" + minutes

    return (
      <div id={index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === index}
          align-items="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.forSelectNote(note, index)}
          >
            <ListItemText
              primary={note.title}
              // secondary={note.createdAt}
              secondary={removeHTMLTags(note.body.substring(0, 40) + "...")}
            ></ListItemText>
          </div>
          <div
            style={{ marginRight: "1rem" }}
            className={classes.deleteIcon}
            onClick={() => this.forDeleteNote(note)}
          >
            <FontAwesomeIcon
              className={classes.deleteIcon}
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </div>
        </ListItem>
      </div>
    );
  }

  forSelectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  forDeleteNote = (n) => {
    const _isDelete = window.confirm(
      `Are you sure you want to delet ${n.title}`
    );
    if (_isDelete) this.props.deleteNote(n);
    else return null;
  };
}

export default withStyles(style)(Sidebaritem);
