import React, { PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncGetLessons } from '../../../redux/lesson';
import style from './DisplayClassStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AsyncGetLessons,
  }, dispatch)
);

const mapStateToProps = state => ({
  classes: state.classes.classes,
  classname: state.lesson.classname || state.classes.currentClass.name,
});

const DisplayClasses = Radium(({ classes, classname, AsyncGetLessons }) => {
  const getLessonsRelatedToClass = classId => (
    AsyncGetLessons(classId, 'electron')
  );

  return (
    <div style={style.displayClasses}>
      <h3 style={style.h3}>Classes</h3>
      <ul style={style.ul}>
        {classes && classes.map(oneClass => (
          <li
            style={oneClass.name === classname ? style.active : {}}
            key={oneClass.id}
            onClick={() => getLessonsRelatedToClass(oneClass.id)}
          >
            <h3># {oneClass.name.toLowerCase()}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
});

DisplayClasses.propTypes = {
  classes: PropTypes.array,
  classname: PropTypes.string,
  AsyncGetLessons: PropTypes.func.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
  classname: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayClasses);
