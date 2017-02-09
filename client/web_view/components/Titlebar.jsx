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

class Titlebar extends Component {
  render() {
    return (
      <div>
        Titlebar
      </div>
    );
  }
}

Titlebar.propTypes = {
  user: PropTypes.object,
};

Titlebar.defaultProps = {
  user: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Titlebar);
