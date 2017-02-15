import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
    console.log(props)
    return (
      <div>
        Lesson
      </div>
    );
  }
}

Lesson.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
