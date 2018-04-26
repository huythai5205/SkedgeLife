import React, { Component } from "react";
import PropTypes from "prop-types";
import "./signUpUserForm.css";
import axios from "axios";
import setAuthorization from "../../utils/setAuthorization";
import { setCurrentUser } from "../../redux/actions/userActions";
import { addFlashMessage } from "../../redux/actions/flashMessageActions";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";

class SignUpUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      socialURL: "",
      errors: {}
    };

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = event => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { errors, ...newUser } = this.state;
    axios
      .post("/api/user", newUser)
      .then(user => {
        const userToken = user.data;
        setAuthorization(userToken);
        localStorage.setItem("userToken", userToken);
        const currentUser = jwt.decode(userToken);
        this.props.setCurrentUser(currentUser);
        this.props.addFlashMessage({
          type: "success",
          text: "You have sign up."
        });
        this.context.router.history.push("/dashboardPage");
      })
      .catch(err => {
        this.setState({ errors: err.response.data.errors });
      });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="create-user-form">
        <div className="error-message">{errors.form}</div>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="input-field col s6">
              <label htmlFor="firstName">*First Name</label>
              <input
                id="firstName"
                type="text"
                onChange={this.change}
                required
              />
            </div>
            <div className="input-field col s6">
              <label htmlFor="lastName">*Last Name</label>
              <input
                id="lastName"
                type="text"
                onChange={this.change}
                required
              />
            </div>
            <div className="input-field col s6">
              <label htmlFor="email">*Email</label>
              <input id="email" type="email" onChange={this.change} required />
            </div>
            <div className="input-field col s6">
              <label htmlFor="password">*Password</label>
              <input
                id="password"
                type="password"
                onChange={this.change}
                required
              />
            </div>
            <div>
              <label htmlFor="socialURL">Social Media URL</label>
              <input id="socialURL" type="text" onChange={this.change} />
            </div>
            <button
              type="submit"
              name="btn_login"
              className="col s12 btn btn-large waves-effect teal"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SignUpUserForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { addFlashMessage, setCurrentUser })(
  SignUpUserForm
);
