import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './HomePageStyles';
import { loginModalAction } from '../../../redux/login';
import { LoginOrSignUp, LoginModal, StudentTeacherModal } from '../index';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loginModalAction,
  }, dispatch)
);

const mapStateToProps = state => ({
  state,
});

@Radium
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.goToLogin = this.goToLogin.bind(this);
  }
  goToLogin() {
    this.props.router.push('/login')
  }

  render() {
    return (
      <div>
        <nav style={style.homebar}>
          <div style={style.logo}>Logo</div>
          <button style={style.loginButton} onClick={this.goToLogin}>Login</button>
        </nav>
        <section style={style.topSection}>
          <div style={style.headlineContainer}>
            <h1 style={style.headline}>Tool for Students.</h1>
            <h1 style={style.headline}>Made by Students</h1>
            <h2 style={style.tagline}>BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH</h2>
          </div>
          <LoginOrSignUp pathname={this.props.location.pathname}/>
        </section>
        {this.props.children}
      </div>
    );
  }
}

HomePage.propTypes = {
  router: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
