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


class Overview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Overview
      </div>
    );
  }
}

Overview.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Overview);
