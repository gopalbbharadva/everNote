import React from "react";
import style from "../Editor/style";
import { debounce, withStyles } from "@material-ui/core";
import ReactQuill from "react-quill";

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
  update = debounce(() => {
      this.props.noteUpdate(this.state.id,{
        title:this.state.title,
        body:this.state.text
      })
  }, 1500);
}

export default withStyles(style)(Editor);
