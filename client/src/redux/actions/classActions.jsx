import { SELECTED_CLASS } from './actionTypes';

export function setSelectedClass(selected_class) {
    return {
        type: SELECTED_CLASS,
        selected_class
    };
}
