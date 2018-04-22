import { combineReducers } from 'redux';
import userReducers from './userReducers';
import classReducers from './classReducers';
import flashMessageReducers from './flashMessageReducers';

const rootReducer = combineReducers({
  userReducers,
  classReducers,
  flashMessageReducers
});

export default rootReducer;