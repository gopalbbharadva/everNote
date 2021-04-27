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

  updateText = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  update = debounce(() => {
    console.log("Debounce working!!");
  }, 2000);
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
}

export default withStyles(style)(Editor);
