import { combineReducers } from 'redux';
import userReducer from './userReducer';
import classReducer from './classReducer';

const rootReducer = combineReducers({
  userReducers,
  classReducer
});

export default rootReducer;