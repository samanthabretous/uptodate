import { combineReducers } from 'redux';
import assignment from './assignment';
import discussion from './discussion';
import classes from './classes';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';


export default combineReducers({
  classes,
  discussion,
  lesson,
  login,
  titlebar,
  assignment,
});
