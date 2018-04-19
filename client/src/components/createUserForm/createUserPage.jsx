import React, { Component } from 'react';
import PropTypes from 'prop-types'

import CreateUserForm from './createUserForm';

import { createUserRequest } from '../../actions/createUserRequest';


const CreateUserPage = () => {
    const { createUserRequest } = this.props;

    return (
        <div className="createUserPage">
            <CreateUserForm createUserRequest={createUserRequest} />
        </div>
    );
}

CreateUserPage.propTypes = {
    createUserRequest: PropTypes.func.isRequired
}

export default CreateUserPage;