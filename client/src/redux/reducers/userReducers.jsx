import { CURRENT_USER } from '../actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }

        default: return state;
    }
}