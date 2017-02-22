import React, { PropTypes } from 'react';
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
});

const DisplayClasses = (props) => {
  const getLessonsRelatedToClass = classId => (
    props.AsyncGetLessons(classId, 'electron')
  );

  return (
    <div style={style.displayClasses}>
      <h3 style={style.h3}>Classes</h3>
      <ul style={style.ul}>
        {props.classes && props.classes.map(oneClass => (
          <li
            key={oneClass.id}
            onClick={() => getLessonsRelatedToClass(oneClass.id)}
          >
            <h3># {oneClass.name.toLowerCase()}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

DisplayClasses.propTypes = {
  classes: PropTypes.array,
  AsyncGetLessons: PropTypes.func.isRequired,
};

DisplayClasses.defaultProps = {
  classes: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayClasses);
