import React from "react";
import style from "../Editor/style";
import { debounce, withStyles } from "@material-ui/core";
import ReactQuill from "react-quill";
import { BorderColor } from "@material-ui/icons";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  render() {
    const { classes } = this.props; // exporting style.js's classes into object.
    return (
      <div className={classes.editorContainer}>
          <BorderColor className={classes.editIcon}></BorderColor>
          <input
            className={classes.titleInput}
            type="text"
            placeholder="Enter title..."
            value={this.state.title}
            onChange={(e) => this.updateTitle(e)}
          />
        <ReactQuill
          value={this.state.text}
          onChange={this.updateText}
        ></ReactQuill>
      </div>
    );
  }
  updateText = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  updateTitle = async (event) => {
    const title = event.target.value;
    await this.setState({
      title: title,
    });
    this.update();
  };
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);
}

export default withStyles(style)(Editor);
