import { combineReducers } from 'redux';
import assignment from './assignment';
import classes from './classes';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';
import votes from './votes';


export default combineReducers({
  assignment,
  classes,
  lesson,
  login,
  titlebar,
  votes,
});
