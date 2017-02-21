import { combineReducers } from 'redux';
import assignment from './assignment';
import classes from './classes';
import discussion from './discussion';
import lesson from './lesson';
import login from './login';
import student from './student';
import titlebar from './titlebar';
import votes from './votes';

export default combineReducers({
  assignment,
  classes,
  discussion,
  lesson,
  login,
  student,
  titlebar,
  votes,
});
