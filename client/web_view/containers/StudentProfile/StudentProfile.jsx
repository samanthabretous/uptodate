import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Radium from 'radium';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import FontAwesome from 'react-fontawesome';
// Styling imports
import style from './StudentProfileStyle';
import appStyles from '../App/styles';

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

        <h1 style={appStyles.h1}>Schedule: </h1>

        { schedule.split(/\r?\n/g).map((date, idx) => <h3 key={idx}>{date}</h3>) }

      </div>
    );
  }

  renderAccountInfo() {
    const { username, email, firstName, lastName } = this.props.student;
    return (
      <div id="accountInfo" style={style.accountInfo}>

        <h1 style={appStyles.h1}>Personal information: </h1>

        <p>username: </p><h3>{username} </h3> <p>email: </p><h3>{email}</h3>

        <p>name: </p> <h3>{`${firstName} ${lastName}`}</h3>

      </div>
    );
  }

  renderDiscussionThreads() {
    const recentDiscussions = this.props.student.recentDiscussions;
    // saving current path into variable for later redirect
    const currentPath = this.props.location.pathname.split('/student').join('');
    return (
      <div id="discussions" style={style.discussions}>
        <h1 style={appStyles.h1}>Recent comments: </h1>
        {
          recentDiscussions.map(({ comment, lessonId, lesson: { name } }, idx) => (
            <div
              onClick={this.handleCommentClick.bind(null, `${currentPath}/${lessonId}/${name}/none`)}
              title="Go to comment thread"
              key={`${idx}-comment`}
              style={style.discussions.comment}
            >
              {/* Truncating text largely for asthetic reasons.
                  Whole div will redirect to the lesson where discussion originated from. */}
              <TextTruncate
                line={1}
                truncateText="…"
                text={comment}
                textTruncateChild={<a href="#">Go to thread</a>}
              />
              <br />
            </div>
          ))
        }
      </div>
    );
  }

  renderGrades() {
    const submittedWork = this.props.student.submittedWork;
    return (
      <div id="grades" style={style.grades} key="grades">
        <h1 style={appStyles.h1}>Recent Grades: </h1>
        <ul style={appStyles.ul}>
          {
            // moment formats our dates into something more palatable for the user
            submittedWork.map((work, idx) => (
              <li key={`${idx}-work`} style={style.grades.li}>
                <FontAwesome name="angle-right" />
                &ensp;
                <span style={style.grades.span}>{work.grade}</span> {`for work submitted on ${moment(work.submitted).format('MMMM Do YYYY')}`}
              </li>),
            )
          }
        </ul>
      </div>
    );
  }

  renderDueAssignments() {
    const classAssignments = this.props.student.classAssignments;
    const { user, currentClassCode } = (this.props.params)
    return (
      <div id="assignments" style={style.assignments} key="assignments">

        <h1 style={appStyles.h1}>Upcoming due dates: </h1>

        {
          classAssignments.map(({ due, instructions,id }, idx) => (

            <div key={idx} style={style.assignments.item}>

              <h3>{moment(due).format('l')}</h3>
              {/* The truncated text here redirects to nowhere at the moment */}
              <TextTruncate
                style={style.assignments.instructions}
                line={1}
                truncateText="…"
                text={instructions}
                textTruncateChild={<Link style={style.assignments.a} to={`/dashboard/${user}/${currentClassCode}/assignments/${id}/showAll`}>Go to assignment page</Link>}
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

        { !username ? null : this.renderDueAssignments() }

        <div style={style.stats}>

          { !username ? <FontAwesome name="circle-o-notch fa-2x" spin /> : this.renderGrades() }

          { !username ? null : this.renderDiscussionThreads() }

        </div>

        { /* !username ? <FontAwesome name="circle-o-notch" spin /> : this.renderAccountInfo() */ }

        { /* !username ? <FontAwesome name="circle-o-notch" spin /> : this.renderSchedule() */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Radium(StudentProfile));
