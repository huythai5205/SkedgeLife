import { SET_CLASS_LIST } from './actionTypes';

export function setCurrentUser(classes) {
    return {
        type: SET_CLASS_LIST,
        classes
    };
}
