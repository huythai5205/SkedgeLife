import React, { Component } from "react";
import "./createClassForm.css";
import PropTypes from "prop-types";
import axios from 'axios';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/userActions';
import { setSelectedClass } from '../../redux/actions/classActions';


class CreateClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '1',
      location: '1',
      startTime: '1',
      endTime: '1',
      startDate: '1',
      endDate: '1',
      seatsAvailable: 0,
      instructor: ''
    }

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount = () => {
    const currentState = this.state;
    this.setState({ ...currentState, instructor: this.props.currentUser.user.userData._id });
  }

  componentWillReceiveProps = (next) => {
    if (next.currentUser) {
      const currentState = this.state;
      this.setState({ ...currentState, instructor: this.props.currentUser.user.userData._id });
    }
  }

  change = event => {
    this.setState({ [event.target.id]: event.target.value });

  }

  onSubmit = event => {
    event.preventDefault();
    const currentState = this.state;
    axios.post('/api/class/' + this.props.currentUser.user.userData._id, currentState).then(classData => {
      console.log(classData);
      // const userToken = token.data;
      // <Redirect to="/dashboard" />;
    }).catch(err => {
      console.log(err);
    });

    this.props.setSelectedClass(this.state);
    localStorage.setItem('selectedClass', JSON.stringify(this.state));
    this.context.router.history.push('/classInfoPage');
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
              <label className="col s6" htmlFor="startDate">*Class Starts Time:</label>
              <input className="col s6" id="startTime" type="time" onChange={this.change} />
            </div>
            <div className="input-field col s6">
              <input className="col s6" id="endTime" type="time" onChange={this.change} />
              <label className="col s6" htmlFor="endDate">*Class Ends Time:</label>
            </div>
            <div className="input-field col s6">
              <input className="col s6" id="startDate" type="date" onChange={this.change} />
              <label className="col s6" htmlFor="startDate">*Class Starts Date:</label>
            </div>
            <div className="input-field col s6">
              <input className="col s6" id="endDate" type="date" onChange={this.change} />
              <label className="col s6" htmlFor="endDate">*Class Ends Date:</label>
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

CreateClassForm.contextTypes = {
  router: PropTypes.object.isRequired
};


export default connect(mapStateToProps, { setCurrentUser, setSelectedClass })(CreateClassForm);