import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';
import Radium, { StyleRoot } from 'radium';
import moment from 'moment';
import style from './DisplayClassLessonsStyle';


const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons,
});

const DisplayClassLessons = ({ classLessons, params: { user, currentClassCode } }) => {
  console.log(classLessons);
return (
  <div style={style.classLessons}>
    {
      classLessons
      ? classLessons.map(({ name, lecture, id, createdAt }) => (
        <StyleRoot key={id} style={style.card}>
          <div style={style.info}>
            <div style={style.topInfo}>
              <h4 style={style.h4}>{name}</h4>
              <p>{moment(createdAt).format('MMM Do')}</p>
            </div>
            <p>{lecture.substr(0, 225)}</p>
          </div>
          <Link
            to={`/dashboard/${user}/${currentClassCode}/${id}/${name}/none`}
            style={style.viewLesson}
          >View Lesson</Link>
        </StyleRoot>
        ))
      :
      <div>
        <h1> Nothing to see here </h1>
        <p> no lessons have been created for this class yet. Be the first and get teaching! </p>
      </div>
    }
  </div>
)};

DisplayClassLessons.PropTypes = {
  classLessons: PropTypes.array,
  params: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(DisplayClassLessons));
