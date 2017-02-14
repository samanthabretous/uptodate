import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  firstName: state.classes.firstName,
});

const App = (props) => {
  const { children, firstName } = props;
  return (
    <div>
      <nav>
        <h1>upToDate</h1>
        {firstName && <h3>Hi, {firstName}</h3>}
      </nav>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  firstName: PropTypes.string,
};

App.defaultProps = {
  firstName: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

