import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

const mapStateToProps = state => ({
  assignments: state.assignment.assignments,
  position: state.titlebar.userInfo.position,
});

class ShowAllAssignments extends Component {
  constructor() {
    super();
    this.state = {
      showAssignment: false,
      assignment: null,
      assignmentId: null,
    };
    this.assignmentsExist = this.assignmentsExist.bind(this);
    this.showAssignment = this.showAssignment.bind(this);
    this.assignmentsList = this.assignmentsList.bind(this);
    this.clickedAssingmnet = this.clickedAssingmnet.bind(this);
    this.download = this.download.bind(this);
    this.submitWork = this.submitWork.bind(this);
    this.viewWork = this.viewWork.bind(this);
  }

  assignmentsExist() {
    return this.props.assignments;
  }

  showAssignment(assignmentId, e) {
    const idx = e.target.value;
    this.setState({ assignment: idx, assignmentId, showAssignment: true });
  }

  assignmentsList() {
    const { assignments } = this.props;
    if (this.assignmentsExist()) {
      return assignments.map((ele, idx) =>
        <li key={ele.id} value={idx} onClick={this.showAssignment.bind(this, ele.id)}>
          {ele.instructions.slice(0, 49)}
        </li>);
    } else {
      return <li>NO ASSIGNMENTS FOR THIS CLASS</li>;
    }
  }

  download(e, file) {
    window.open(`/api/download/getfile?file=${file}`);
  }

  clickedAssingmnet() {
    if (this.state.showAssignment) {
      const { assignment } = this.state;
      const { instructions, file, exercises, due } = this.props.assignments[assignment];
      const { position } = this.props;
      return (<div>
        Instructions: {instructions}
        <br />
        {file ? <button onClick={e => this.download(e, file)}>Download file </button> : 'no file for this assignment'}
        <br />
        Exercises: {exercises}
        <br />
        Due: {due}
        <br />
        {position === 'Student' ? <button onClick={this.submitWork}>submit work</button> : <button onClick={this.viewWork}>view submited work</button>}
      </div>);
    } else {
      return (<div>
        SELECT ASSIGNMENT
      </div>);
    }
  }

  submitWork() {
    const { assignmentId } = this.state;
    const { router } = this.props;
    let currentPath = router.getCurrentLocation().pathname;
    currentPath = currentPath.split('/');
    currentPath = currentPath.slice(1, 6).join('/');
    router.push(`/${currentPath}/submitWork/${assignmentId}`);
  }

  viewWork() {
    const { assignmentId } = this.state;
    const { router } = this.props;
    let currentPath = router.getCurrentLocation().pathname;
    currentPath = currentPath.split('/');
    currentPath = currentPath.slice(1, 6).join('/');
    router.push(`/${currentPath}/viewWork/${assignmentId}`);
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
  position: PropTypes.string,
  router: PropTypes.object,
};

ShowAllAssignments.defaultProps = {
  assignments: null,
  position: 'Student',
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllAssignments);
