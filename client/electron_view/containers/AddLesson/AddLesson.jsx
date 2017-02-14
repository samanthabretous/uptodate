import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DisplayClasses } from '../../components';
import fileWatcher from '../../utils/fileWatcher';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  folderPath: state.lesson.folderPath,
});

class AddLesson extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    fileWatcher(this.props.folderPath);
  }

  render() {
    const { folderPath } = this.props;
    return (
      <div>
        <DisplayClasses />
        <input
          onClick={this.submit}
          type="submit"
        />
      </div>
    );
  }
}

AddLesson.proptypes = {
  folderPath: PropTypes.string,
  firstName: PropTypes.string,
};

AddLesson.defaultProps = {
  folderPath: null,
  firstName: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLesson);
