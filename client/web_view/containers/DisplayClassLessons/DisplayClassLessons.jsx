import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncGetLessons } from '../../../redux/lesson';


const mapDispatchToProps = dispatch => (
  bindActionCreators({ AsyncGetLessons }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

const DisplayClassLessons = ({ state }) => (
  <div>
    {
      state.lesson.classLessons
      ? state.lesson.classLessons.map(({ name }, idx) => <h1 key={idx}> {name} </h1>)
      : <div>Loading...</div>
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(DisplayClassLessons);
