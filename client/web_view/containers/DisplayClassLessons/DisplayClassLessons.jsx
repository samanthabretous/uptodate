import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AsyncGetLessons } from '../../../redux/lesson';


const mapDispatchToProps = dispatch => (
  bindActionCreators({ AsyncGetLessons }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class DisplayClassLessons extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props);
    console.log(this.props.state);
    return (
      <div>
        hello from display all lessons
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayClassLessons);
