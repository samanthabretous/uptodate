import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drop from './Drop';

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
        <Drop />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
