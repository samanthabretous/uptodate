import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ViewInstructorCode, Votes } from '../../components';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});


class Lesson extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ViewInstructorCode />
        <Votes lessonId={this.props.params.lessonId}/>
      </div>
    );
  }
}

Lesson.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
