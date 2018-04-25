import { SELECTED_CLASS } from '../actions/actionTypes';

const initialState = {
    selected_class: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SELECTED_CLASS:
            return {
                selected_class: action.selected_class
            }

        default: return state;
    }
}