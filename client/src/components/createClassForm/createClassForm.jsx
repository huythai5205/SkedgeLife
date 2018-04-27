import React, { Component } from "react";
import "./createClassForm.css";
import PropTypes from "prop-types";
import axios from 'axios';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/userActions';
import { setSelectedClass } from '../../redux/actions/classActions';
import { addFlashMessage } from '../../redux/actions/flashMessageActions';
import jwt from 'jsonwebtoken';


class CreateClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      startTime: '',
      endTime: '',
      startDate: '',
      endDate: '',
      seatsAvailable: '',
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
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }


  onSubmit = event => {
    event.preventDefault();
    axios.post('/api/class/' + this.props.currentUser.user.userData._id, this.state).then(user => {
      const userToken = user.data;
      const currentUser = jwt.decode(userToken);
      this.props.setCurrentUser(currentUser);
      this.props.addFlashMessage({
        type: 'success',
        text: 'Class have created.'
      });
      this.context.router.history.push('/dashboardPage');

    }).catch(err => {
      console.log(err);
    });

  }

  render() {
    const { errors } = this.state;
    return (
      <div className="createClassForm">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="input-field col s6">
              <input id="name" type="text" onChange={this.change} required />
              <label htmlFor="name">Class Name:</label>
            </div>
            <div className="input-field col s6">
              <input id="location" type="text" onChange={this.change} required />
              <label htmlFor="location">Location:</label>
            </div>
            <div className="col s6">
              <label>Class Start Time:</label>
              <div className="input-field inline">
                <input id="startTime" type="time" onChange={this.change} required />
              </div>
            </div>
            <div className="col s6">
              <label>Class End Time:</label>
              <div className="input-field inline">
                <input id="endTime" type="time" onChange={this.change} required />
              </div>
            </div>
            <div className="col s6">
              <label>Class Start Date:</label>
              <div className="input-field inline">
                <input className="col s6" id="startDate" type="date" onChange={this.change} required />
              </div>
            </div>
            <div className="col s6">
              <label>Class End Date:</label>
              <div className="input-field inline">
                <input className="col s6" id="endDate" type="date" onChange={this.change} required />
              </div>
            </div>
            <div className="input-field col s6">
              <input id="seatsAvailable" type="number" onChange={this.change} required />
              <label htmlFor="seatsAvailable">Seats Available:</label>
            </div>
            <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal'> Create Class</button>
          </form>
        </div>
      </div >
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


export default connect(mapStateToProps, { addFlashMessage, setCurrentUser })(CreateClassForm);