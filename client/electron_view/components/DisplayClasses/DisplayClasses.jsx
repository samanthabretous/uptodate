import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncGetLessons } from '../../../redux/lesson';

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
    <div>
      <ul>
        {props.classes && props.classes.map(oneClass => (
          <li
            key={oneClass.id}
            onClick={() => getLessonsRelatedToClass(oneClass.id)}
          >
            <h3>{oneClass.name}</h3>
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
