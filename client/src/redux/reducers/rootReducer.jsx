import { combineReducers } from 'redux';
import userReducer from './userReducer';
import classReducer from './classReducer';

const rootReducer = combineReducers({
  userReducer,
  classReducer
});

export default rootReducer;