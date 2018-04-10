import React, { Component } from 'react';
import './createUserForm.css';

export default class createUserForm extends Component {
    render() {
        return (
            <div className="create-user-form">

                <div className="row">
                    <form className="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="First Name" id="first_name" type="text" class="validate" />
                                <label for="first_name">*First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="Last Name" type="text" class="validate" />
                                <label for="last_name">*Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="First Name" id="first_name" type="text" class="validate" />
                                <label for="first_name">*Email</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="Last Name" type="text" class="validate" />
                                <label for="last_name">*Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <input placeholder="First Name" id="first_name" type="text" class="validate" />
                            <label for="first_name">Social Media URL</label>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}