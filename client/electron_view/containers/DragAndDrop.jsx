import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drop from './Drop';
import fileWatcher from './fileWatcher';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

export class DragAndDrop extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    fileWatcher('/Users/Joshua/Desktop/projects/test_watching');
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
        <input
          onClick={this.submit}
          type="submit"
        />
        <Drop />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
