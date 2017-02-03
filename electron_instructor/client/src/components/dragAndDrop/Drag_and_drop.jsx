import React, { Component } from 'react';

export default class DragAndDrop extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

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
