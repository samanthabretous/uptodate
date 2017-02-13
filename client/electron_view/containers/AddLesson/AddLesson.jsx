import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropFolder } from '../../components';
import fileWatcher from '../../utils/fileWatcher';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => {
  console.log(state)
  return {
  folderPath: state.lesson.folderPath,
}};

class AddLesson extends Component {
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
    fileWatcher();
  }

  render() {
    const { inputValue } = this.state;
    const { folderPath } = this.props;
    
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
        <DropFolder />
      </div>
    );
  }
}

AddLesson.proptypes = {
  folderPath: PropTypes.string,
};

AddLesson.defaultProps = {
  folderPath: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLesson);
