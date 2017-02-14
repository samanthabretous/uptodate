import { combineReducers } from 'redux';
import lesson from './lesson';
import login from './login';
import titlebar from './titlebar';
import assignment from './assignment';


export default combineReducers({
  lesson,
  login,
  titlebar,
  assignment,
});
