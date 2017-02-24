import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Style } from 'radium';
import _ from 'lodash';
import style from './AppStyles';
import { DisplayClasses } from '../../components';


const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({
  firstName: state.classes.firstName,
});

const App = (props) => {
  const { children, location: { pathname } } = props;
  const isMainView = () => _.includes(pathname, 'add-lesson');

  return (
    <div style={style.app}>
      <Style rules={style.overallRules} />
      <div style={style.infoBar}>
        <div style={style.infoContainer}>
          <div style={style.logo}>
            <img
              style={style.logoImg}
              alt="logo"
              src="../web_view/public/images/logos/horizontal-white.png"
            />
          </div>
          {isMainView() && <DisplayClasses />}
        </div>
      </div>
      <div style={style.children}>
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  firstName: PropTypes.string,
  location: PropTypes.object.isRequired,
};

App.defaultProps = {
  firstName: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

