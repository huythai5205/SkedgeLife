import axios from 'axios';
import { connect } from 'react-redux';

function setAuthorization(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthorization;