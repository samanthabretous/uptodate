import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import style from './StudentProfileStyle';


const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

const mapStateToProps = state => ({
  student: state.student,
});

class StudentProfile extends Component {
  constructor() {
    super();

    this.handleCommentClick = this.handleCommentClick.bind(this);

    this.renderSchedule = this.renderSchedule.bind(this);
    this.renderAccountInfo = this.renderAccountInfo.bind(this);
    this.renderGrades = this.renderGrades.bind(this);
    this.renderDiscussionThreads = this.renderDiscussionThreads.bind(this);
    this.renderDueAssignments = this.renderDueAssignments.bind(this);
  }

  handleCommentClick(path) {
    this.props.router.push(path);
  }

  // choosing to do most of my logic in seperate functions for readability
  renderSchedule() {
    const schedule = this.props.student.currentClass.schedule;
    // splitting against any possible line breaks for a clean look when it renders
    return (
      <div id="schedule" style={style.schedule}>

        <h1>Schedule: </h1>

        { schedule.split(/\r?\n/g).map((date, idx) => <h3 key={idx}>{date}</h3>) }

      </div>
    );
  }

  renderAccountInfo() {
    const { username, email, firstName, lastName } = this.props.student;
    return (
      <div id="accountInfo">

        <h1>Personal information: </h1>

        <p>username: </p><h3>{username} </h3> <p>email: </p><h3>{email}</h3>

        <p>name: </p> <h3>{`${firstName} ${lastName}`}</h3>

      </div>
    );
  }

  renderDiscussionThreads() {
    const recentDiscussions = this.props.student.recentDiscussions;
    // saving current path into variable for later redirect
    const currentPath = this.props.location.pathname;
    return (
      <div id="discussions">
        <h1>Recent comments: </h1>
        {
          recentDiscussions.map(({ comment, lessonId, lesson: { name } }, idx) => (
            <div
              onClick={this.handleCommentClick.bind(null, `${currentPath}${lessonId}/${name}`)}
              title="Go to comment thread"
              key={idx}
            >
              {/* Truncating text largely for asthetic reasons.
                  Whole div will redirect to the lesson where discussion originated from. */}
              <TextTruncate
                line={1}
                truncateText="…"
                text={comment}
                textTruncateChild={<Link to={`${currentPath}/${lessonId}/${name}`}>Go to thread</Link>}
              />
            </div>
          ))
        }
      </div>
    );
  }

  renderGrades() {
    const submittedWork = this.props.student.submittedWork;
    return (
      <div id="grades">
        <h1>Recent Grades: </h1>
        <ul>
          {
            // moment formats our dates into something more palatable for the user
            submittedWork.map((work, idx) => (
              <li key={idx}>{`${work.grade} for work submitted on ${moment(work.submitted).format('MMMM Do YYYY')}`}</li>),
            )
          }
        </ul>
      </div>
    );
  }

  renderDueAssignments() {
    const classAssignments = this.props.student.classAssignments;
    return (
      <div id="assignments">
        <h1>Upcoming due dates: </h1>
        {
          classAssignments.map(({ due, instructions }, idx) => (
            <div key={idx}>
              <h3>{moment(due).format('l')}</h3>
              {/* The truncated text here redirects to nowhere at the moment */}
              <TextTruncate
                line={1}
                truncateText="…"
                text={instructions}
                textTruncateChild={<Link to="#">Go to assignment page</Link>}
              />
            </div>
          ))
        }
      </div>
    );
  }

  render() {
    const { username } = this.props.student;
    return (
      <div id="profile" style={style.profile}>
        { !username ? null : this.renderGrades() }

        { !username ? null : this.renderDueAssignments() }

        { !username ? null : this.renderDiscussionThreads() }

        { !username ? null : this.renderAccountInfo() }

        { !username ? null : this.renderSchedule() }

      </div>
    );
  }
}

StudentProfile.PropTypes = {
  params: PropTypes.object,
  router: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  student: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    classAssignments: PropTypes.arrayOf(PropTypes.object),
    submittedWork: PropTypes.arrayOf(PropTypes.object),
    recentDiscussions: PropTypes.arrayOf(PropTypes.object),
    currentClass: PropTypes.shape({
      schedule: PropTypes.string,
    }),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
