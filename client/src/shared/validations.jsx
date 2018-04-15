const isEmpty = require('lodash.isempty');

export default function validateInput(data) {
    let errors = {};

    if (data.email === '') {
        errors.email = 'This field is required';
    }

    if (data.password === '') {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}