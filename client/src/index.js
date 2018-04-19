import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

//redux
import { Provider } from 'react-redux'

import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';


const store = configureStore();

if (localStorage.userToken) {
    setAuthorizationToken(localStorage.userToken);
    // store.dispatch(setCurrentUser(jwtDecode(localStorage.userToken)));
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
