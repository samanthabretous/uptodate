import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginOrSignUp } from './index';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

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
      <div>
        <nav>
          <div>Logo</div>
          <button onClick={this.goToLogin}>Login</button>
        </nav>
        <section className="landing_view">
          <div>
            <h1>Tool for Students. Made by Students</h1>
            <h2>BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH</h2>
          </div>
          <LoginOrSignUp pathname={this.props.location.pathname}/>
        </section>
      </div>
    );
  }
}

// HomePage.propTypes = {
//   router: PropTypes.object.isRequired,
// };


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
