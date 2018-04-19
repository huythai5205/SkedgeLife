import Axios from "axios";


export const createUserRequest = (userData) => {
  return dispatch => {
    return Axios.post('./api/user', userData).catch(err => {
      console.log(err);
    });
  }
}
