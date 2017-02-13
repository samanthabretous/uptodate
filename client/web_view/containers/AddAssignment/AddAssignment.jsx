import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncGetLessons } from '../../../redux/assignment';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetLessons,
  }, dispatch)
);

const mapStateToProps = state => {
console.log(state);
return {
  classId: 1,
  classLessons: state.assignment.classLesson,
}
};

class AddAssignment extends Component {
  constructor(props) {
    super(props);
    this.buildLessonList = this.buildLessonList.bind(this);
  }

  componentDidMount() {
    this.props.AsyncGetLessons(this.props.classId);
  }

  buildLessonList() {
    const { classLessons } = this.props;
    console.log(this.props)
    if (classLessons) {
      console.log("im in the IF")
      return classLessons.map((ele, idx) => <option value={ele.id}>{ele.name}</option>);
    }
  }
  render() {
    // const { classLessons } = this.props;
    // console.log(this.props)
    // if (classLessons) {
    //   console.log("im in the IF")
    //   // return lessons.map((ele, idx) => <option value={ele.id}>{ele.name}</option>);
    // }
    return (
      <div >
        <select>
          <option value={1}>General Class Assignment</option>
          {this.props.classLessons && this.buildLessonList()}
        </select>
      </div>
    );
  }
}

AddAssignment.propTypes = {
};


export default connect(mapStateToProps, mapDispatchToProps)(AddAssignment);
