import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sidebar, Titlebar } from '../components';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});


class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <section>
          <h1>Up To Date</h1>
          <Titlebar />
        </section>
        <section>
          <Sidebar />
          <div>
            {children}
          </div>
        </section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node,
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
