import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './HomePageStyles';
import { loginModalAction } from '../../../redux/login';
import { LoginOrSignUp } from '../index';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loginModalAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.goToLogin = this.goToLogin.bind(this);
  }
  goToLogin() {
    this.props.router.push('/login');
  }

  render() {
    return (
      <div style={style.homepage}>
        <nav style={style.homebar}>
          <div style={style.logoContainer}>
            <img style={style.logo} src="../images/logos/logo-vertical-white.png" alt="logo" />
          </div>
          <button style={style.loginButton} onClick={this.goToLogin}>Log In</button>
        </nav>
        <section style={style.topSection}>
          <div style={style.headlineContainer}>
            <h1 style={style.headline}>Tool for the classroom.</h1>
            <h1 style={style.headline}>Made by Students</h1>
            <h2 style={style.tagline}>We believe learning should be as seamless as possible. So we created a content management system to help increase productivity.</h2>
          </div>
          <LoginOrSignUp pathname={this.props.location.pathname} home />
        </section>
        {this.props.children}
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  children: PropTypes.element,
};

HomePage.defaultProps = {
  children: null,
};

HomePage = Radium(HomePage);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
