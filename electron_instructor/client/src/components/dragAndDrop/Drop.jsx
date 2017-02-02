import React, { Component } from 'react';

export default class Drop extends Component {
  constructor() {
    super();
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(e) {
    e.preventDefault();
    console.log("evnt",e.preventDefault())
    for (let f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path);
    }
    return false;
  }
  
  render() {
    return (
      <div>
        <div
          draggable
          onDragOver={this.handleDrop}
          onDragLeave={() => false}
          onDragEnd={() => false}
          onDrop={this.handleDrop}
          id="holder"
          className="dropArea"
        >
          Drag your file here
        </div>
      </div>
    );
  }
}



