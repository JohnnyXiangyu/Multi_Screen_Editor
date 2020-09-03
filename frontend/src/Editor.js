import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

const highlightedCode = hljs.highlight('xml', '<span>Hello World!</span>').value;

class HighlighedEditor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          state: "init",
          text: "",
      }
  }

  render() {
      
  }
}

export HighlighedEditor;