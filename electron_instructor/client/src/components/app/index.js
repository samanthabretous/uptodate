import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from './App';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
);

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);