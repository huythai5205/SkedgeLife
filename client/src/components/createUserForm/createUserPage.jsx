import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import CreateUserForm from './createUserForm';



class CreateUserPage extends Component {

    render() {
        return (
            <div className="createUserPage">
                <CreateUserForm />
            </div>
        );
    }

}

export default CreateUserPage;