import { combineReducers } from 'redux';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';


export default combineReducers({
  lesson,
  login,
  titlebar,
});
