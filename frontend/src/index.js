import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";

class CEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "init", // states include: init, pending, done
      originalText: "",
      formattedText: "",
    }
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="python"
          theme="github"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

//===================================
ReactDOM.render(
  <CEditor />,
  document.getElementById("root")
);