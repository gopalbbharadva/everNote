import React from "react";
import style from "../Sidebaritem/style";
import { ListItem, ListItemText, withStyles } from "@material-ui/core";
import "../helper";
import { removeHTMLTags } from "../helper";

class Sidebaritem extends React.Component {
  render() {
    const { note, index, selectedNoteIndex, classes } = this.props;

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
              secondary={removeHTMLTags(note.body.substring(0, 40) + "...")}
            ></ListItemText>
          </div>
          <div
            style={{marginRight:"1rem"}}
            className={classes.deleteIcon}
            onClick={()=> this.forDeleteNote(note)}>
            D
          </div>
        </ListItem>
      </div>
    );
  }

  forSelectNote = (n, i) => {
      this.props.selectNote(n,i);
  }

  forDeleteNote = (n) => {
      window.confirm(`Are you sure you want to delet ${n.title}`);
      this.props.deleteNote(n);
  }
}

export default withStyles(style)(Sidebaritem);
