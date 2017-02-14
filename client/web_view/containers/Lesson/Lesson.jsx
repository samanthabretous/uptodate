import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ViewInstructorCode from '../ViewInstructorCode';
import Discussion from '../Discussion';
import Votes from '../Votes';

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
        <Link></Link>
        Lesson
      </div>
    );
  }
}

Lesson.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
