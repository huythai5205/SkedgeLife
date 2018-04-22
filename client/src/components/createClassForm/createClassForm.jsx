import React, { Component } from "react";
import "./createClassForm.css";
import { connect } from 'react-redux';
import axios from 'axios';

class CreateClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      startDate: '',
      endData: '',
      seatsAvailable: 0,
      instructor: {}
    }

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ instructor: this.props.currentUser });
    // this.props.createUserRequest(this.state);
    axios.post('/api/class', this.state).then(token => {
      // const userToken = token.data;
      // <Redirect to="/dashboard" />;
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="createClassForm">
        <div className="row">
          <form className="col s12">
            <div className="input-field col s6">
              <input id="name" type="text" onChange={this.change} />
              <label htmlFor="name">*Class Name:</label>
            </div>
            <div className="input-field col s6">
              <input id="location" type="text" onChange={this.change} />
              <label htmlFor="location">*Location:</label>
            </div>
            <div className="input-field col s6">
              <input id="startDate" type="datetime" onChange={this.change} />
              <label htmlFor="startDate">*Class Starts Date:</label>
            </div>
            <div className="input-field col s6">
              <input id="endDate" type="date" onChange={this.change} />
              <label htmlFor="endDate">*Class Ends Date:</label>
            </div>
            <div className="input-field col s6">
              <input id="seatsAvailable" type="number" onChange={this.change} />
              <label htmlFor="seatsAvailable">*Seats Available:</label>
            </div>
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducers
  }
}
export default connect(mapStateToProps)(CreateClassForm);