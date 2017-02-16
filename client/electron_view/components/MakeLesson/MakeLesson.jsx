import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons,
});

class MakeLesson extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      lectureValue: '',
    };
    this.createLesson = this.createLesson.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNameInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValidForm() {
    const { folderPath, classLessons } = this.props;
    const { nameValue } = this.state;
    const nameLength = nameValue.length > 0;

    // make sure lesson name is unqiue based on class
    const islessonNameUnique = nameLength
      ? _.includes(classLessons, nameValue)
      : false;

    return folderPath && nameLength && islessonNameUnique;
  }

  createLesson() {
    if(isValidForm()){
      //send out ajax 
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="nameValue"
          value={this.state.nameValue}
          placeholder="Enter name of lecture"
        />
        <textarea
          placeholder="Enter lecture description"
          rows="4" cols="50"
          value={this.state.lectureValue}
        />
        <button onClick={this.createLesson}>Create Lesson</button>
      </div>
    );
  }
}

MakeLesson.propTpyes = {
  folderPath: PropTypes.string,
  classLessons: PropTypes.array,
};

MakeLesson.defaultProps = {
  folderPath: null,
  classLessons: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeLesson);
