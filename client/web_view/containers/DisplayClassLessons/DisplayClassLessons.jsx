import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import Radium, { StyleRoot } from 'radium';
import moment from 'moment';
import style from './DisplayClassLessonsStyle';
import { clearCode } from '../../../redux/lesson';


const mapDispatchToProps = dispatch => (
  bindActionCreators({ clearCode }, dispatch)
);

const mapStateToProps = state => ({
  classLessons: state.lesson.classLessons,
});

const DisplayClassLessons = ({ classLessons, clearCode, router, params: { user, currentClassCode } }) => {
  const goToLesson = (id, name) => {
    clearCode();
    router.push(`/dashboard/${user}/${currentClassCode}/${id}/${name}/none`);
  };
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
            <button
              onClick={() => goToLesson(id, name)}
              style={style.viewLesson}
            >View Lesson</button>
          </StyleRoot>
          ))
        :
        <div>
          <h1> Nothing to see here </h1>
          <p> no lessons have been created for this class yet. Be the first and get teaching! </p>
        </div>
      }
    </div>
  );
};

DisplayClassLessons.propTypes = {
  classLessons: PropTypes.arrayOf(PropTypes.any),
  params: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(DisplayClassLessons)));
