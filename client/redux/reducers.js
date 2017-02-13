import { combineReducers } from 'redux';
import dashboard from './dashboard';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';
import assignment from './assignment';


export default combineReducers({
  dashboard,
  lesson,
  login,
  titlebar,
  assignment,
});
