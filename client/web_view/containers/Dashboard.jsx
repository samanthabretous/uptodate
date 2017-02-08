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


class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
