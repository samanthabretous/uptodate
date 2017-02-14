import { combineReducers } from 'redux';
import classes from './classes';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';
import assignment from './assignment';


export default combineReducers({
  classes,
  lesson,
  login,
  titlebar,
  assignment,
});
