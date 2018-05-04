import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import setAuthorization from '../../utils/setAuthorization';
import './loginForm.css';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../redux/actions/flashMessageActions';
import { setCurrentUser } from '../../redux/actions/userActions';
import jwt from 'jsonwebtoken';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    change = event => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();

        axios.post('./api/login/', { email: this.state.email, password: this.state.password }).then(userData => {

            const userToken = userData.data;
            setAuthorization(userToken);
            localStorage.setItem('userToken', userToken);
            const currentUser = jwt.decode(userToken);
            console.log(userData);
            this.props.setCurrentUser(currentUser);
            this.props.addFlashMessage({
                type: 'success',
                text: 'You have logged in.'
            });
            this.context.router.history.push('/dashboardPage');

        }).catch(error => {
            this.setState({ errors: error.response.data.errors })
        });
    }



    render() {
        const { errors } = this.state;
        return (
            <div className="login-form">
                <h5 className>Login to your account</h5>
                <div className="error-message">{errors.form}</div>
                <form className="col s12" onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <label htmlFor='email'>Enter your email</label>
                            <input id='email' type='email' onChange={this.change} />
                        </div>
                        <div className='input-field col s12'>
                            <label htmlFor='password'>Enter your password</label>
                            <input id='password' type='password' onChange={this.change} />
                        </div>
                        <label>
                            <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                        </label>
                        <br />
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal'>Login</button>
                    </div>
                </form>
                <a href="#!">Create account</a>
            </div>
        );
    }
}


LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { addFlashMessage, setCurrentUser })(LoginForm);