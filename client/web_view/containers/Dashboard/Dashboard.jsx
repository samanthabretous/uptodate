import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sidebar, Titlebar } from '../../components';
import style from './DashboardStyles';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

@Radium
class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={style.dashboard}>
        <Titlebar />
        <section style={style.mainView}>
          <Sidebar />
          <div style={style.content}>
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
