import { combineReducers } from 'redux';
import assignment from './assignment';
import classes from './classes';
import discussion from './discussion';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';
import votes from './votes';
import work from './work';

export default combineReducers({
  assignment,
  classes,
  discussion,
  lesson,
  login,
  titlebar,
  votes,
  work,
});
