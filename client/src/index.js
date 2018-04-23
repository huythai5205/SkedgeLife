import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { setCurrentUser } from './redux/actions/userActions';
import jwt from 'jsonwebtoken';

//redux
import { Provider } from 'react-redux'

import setAuthorization from './utils/setAuthorization';
// import jwt from 'jsonwebtoken';


const store = configureStore();

if (localStorage.userToken) {
    setAuthorization(localStorage.userToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.userToken)));
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
