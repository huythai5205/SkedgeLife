import React, { Component } from 'react';
import './createUserForm.css';

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


    change = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="create-user-form">

                <div className="row">
                    <form className="col s12">
                        <div className="input-field col s6">
                            <input placeholder="First Name" id="first_name" type="text" name="firstName" onChange={this.change} />
                            <label htmlFor="first_name">*First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" id="Last Name" type="text" name="lastName" onChange={this.change} />
                            <label htmlFor="last_name">*Last Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="First Name" id="first_name" type="text" name="email" onChange={this.change} />
                            <label htmlFor="first_name">*Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Password" id="Last Name" type="text" name="password" onChange={this.change} />
                            <label htmlFor="last_name">*Password</label>
                        </div>
                        <input placeholder="First Name" id="first_name" type="text" name="socialURL" onChange={this.change} />
                        <label htmlFor="first_name">Social Media URL</label>
                        <button onClick={this.onSubmit}>Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}