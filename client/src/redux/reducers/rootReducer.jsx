import { combineReducers } from 'redux';
import userReducer from './userReducer';
import classReducer from './classReducer';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  userReducer,
  classReducer,
  flashMessages
});

export default rootReducer;