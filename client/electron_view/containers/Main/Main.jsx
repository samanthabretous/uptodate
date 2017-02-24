import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import style from './MainStyles';

const mapStateToProps = state => ({
  firstname: state.classes.firstName,
  classname: state.lesson.classname || state.classes.currentClass.name,
});

const Main = ({ classname, firstname, children }) => (
  <div style={style.main}>
    <div style={style.titlebar}>
      <h2>{classname.toLowerCase()}</h2>
      <h2>Hi, {firstname}</h2>
    </div>
    <div style={style.children}>
      {children}
    </div>
  </div>
);

Main.propTypes = {
  firstname: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.element.isRequired,
};
Main.defaultProps = {
  firstname: '',
  classname: '',
};

export default connect(mapStateToProps)(Main);
