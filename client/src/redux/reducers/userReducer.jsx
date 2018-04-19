import { CREATE_USER } from '../actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default: return state;
    }
}