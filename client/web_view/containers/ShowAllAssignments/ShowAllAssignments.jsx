import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  assignments: state.assignment.assignments,
});

class ShowAllAssignments extends Component {
  constructor() {
    super();
    this.state = {
      showAssignment: false,
      assignment: null,
    };
    this.assignmentsExist = this.assignmentsExist.bind(this);
    this.showAssignment = this.showAssignment.bind(this);
    this.assignmentsList = this.assignmentsList.bind(this);
    this.clickedAssingmnet = this.clickedAssingmnet.bind(this);
    this.download = this.download.bind(this);
  }

  assignmentsExist() {
    return this.props.assignments;
  }

  showAssignment(e) {
    const idx = e.target.value;
    this.setState({ assignment: idx, showAssignment: true });
  }

  assignmentsList() {
    const { assignments } = this.props;
    if (this.assignmentsExist()) {
      return assignments.map((ele, idx) =>
        <li key={ele.id} value={idx} onClick={this.showAssignment}>
          {ele.instructions.slice(0, 49)}
        </li>);
    } else {
      return <li>NO ASSIGNMENTS FOR THIS CLASS</li>;
    }
  }

  clickedAssingmnet() {
    if (this.state.showAssignment) {
      const { assignment } = this.state;
      const { instructions, file, exercises, due } = this.props.assignments[assignment];
      return (<div>
        Instructions: {instructions}
        <br />
        {file ? <button onClick={this.download.bind(this, file)}>Download file </button> : 'no file for this assignment'}
        <br />
        Exercises: {exercises}
        <br />
        Due: {due}
        <br />
      </div>);
    } else {
      return (<div>
        SELECT ASSIGNMENT
      </div>);
    }
  }

  download(file) {
    window.open(`/api/download/getFile?file=${file}`);
  }

  render() {
    return (
      <div style={{ display: 'flex', justify_content: 'center' }}>
        <ul>
          {this.assignmentsList()}
        </ul>
        <div>
          {this.clickedAssingmnet()}
        </div>
      </div>
    );
  }
}

ShowAllAssignments.propTypes = {
  assignments: PropTypes.array,
};

ShowAllAssignments.defaultProps = {
  assignments: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllAssignments);
