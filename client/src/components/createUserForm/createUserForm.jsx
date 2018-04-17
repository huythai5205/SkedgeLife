import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './createUserForm.css';

import axios from 'axios';

export default class createUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            socialURL: ''
        }

        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    change = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();
        axios.post('/api/user', this.state).then(data => {
            // <Redirect to="/dashboard" />;
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="create-user-form">
                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s6">
                            <input id="firstName" type="text" onChange={this.change} />
                            <label htmlFor="firstName">*First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" type="text" onChange={this.change} />
                            <label htmlFor="lastName">*Last Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="text" onChange={this.change} />
                            <label htmlFor="email">*Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="password" type="text" onChange={this.change} />
                            <label htmlFor="password">*Password</label>
                        </div>
                        <input id="socialURL" type="text" onChange={this.change} />
                        <label htmlFor="socialURL">Social Media URL</label>
                        <button onClick={this.onSubmit}>Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}