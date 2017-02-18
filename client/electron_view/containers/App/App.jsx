import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Style } from 'radium';
import style from './AppStyles';


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
      <Style rules={style.overallRules} />
      <nav style={style.infoBar}>
        <h1>upToDate</h1>
        {firstName && <h4>Hi, {firstName}</h4>}
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

