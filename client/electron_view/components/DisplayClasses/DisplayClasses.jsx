import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  classes: state.classes.classes,
});

const DisplayClasses = props => {
  console.log(props.classes)
  return (
  <div>
    {props.classes && props.classes.map(oneClass => (
      <article key={oneClass.id}>
        <h3>{oneClass.name}</h3>
      </article>
    ))}
  </div>
  )
};

DisplayClasses.propTypes = {
  classes: PropTypes.array,
};

DisplayClasses.defaultProps = {
  classes: null,
};

export default connect(mapStateToProps)(DisplayClasses);
