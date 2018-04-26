import { CURRENT_USER } from './actionTypes';
import setAuthorization from '../../utils/setAuthorization';

export function setCurrentUser(user) {
  return {
    type: CURRENT_USER,
    user
  };
}

export function logout() {
  localStorage.removeItem('userToken');
  setAuthorization(false);
  return setCurrentUser({});
}

