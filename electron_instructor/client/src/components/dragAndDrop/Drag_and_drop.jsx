import React, { Component } from 'react';

export default class DragAndDrop extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    // this.handleDrop = this.handleDrop.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  // handleDrop(e) {
  //   e.preventDefault();
  //   console.log("evnt",e.preventDefault())
  //   for (let f of e.dataTransfer.files) {
  //     console.log('File(s) you dragged here: ', f.path);
  //   }
  //   return false;
  // }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          value={inputValue}
          onChange={this.handleInput}
          type="text"
        />
      </div>
    );
  }
}

       // <div
        //   draggable
        //   onDragOver={this.handleDrop}
        //   onDragLeave={() => false}
        //   onDragEnd={() => false}
        //   onDrop={this.handleDrop}
        //   id="holder"
        //   className="dropArea"
        // >
        //   Drag your file here
        // </div>
