import React, { Component } from 'react';
import PropTypes from 'prop-types'

import CreateUserForm from './createUserForm';



const CreateUserPage = () => {

    return (
        <div className="createUserPage">
            <CreateUserForm />
        </div>
    );
}

CreateUserPage.propTypes = {
    createUserRequest: PropTypes.func.isRequired
}

export default CreateUserPage;