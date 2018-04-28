import React, { Component } from 'react';
import './classInfoPage.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from 'axios';
import { addFlashMessage } from '../../redux/actions/flashMessageActions';
import setAuthorization from '../../utils/setAuthorization';
import { setCurrentUser } from '../../redux/actions/userActions';
import jwt from 'jsonwebtoken';
import moment from 'moment';

class ClassInfoPage extends Component {



    addClass = event => {
        event.preventDefault();
        if (this.props.currentUser.user.userData._id && this.props.selectedClass.selected_class._id) {
            axios.post('/api/addingClass/' + this.props.currentUser.user.userData._id, { classId: this.props.selectedClass.selected_class._id }).then(userData => {
                const userToken = userData.data;
                setAuthorization(userToken);
                localStorage.setItem('userToken', userToken);
                const currentUser = jwt.decode(userToken);
                this.props.setCurrentUser(currentUser);
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'You successfully had the class.'
                });
                this.context.router.history.push('/dashboardPage');
            }).catch(err => console.log(err));
        }

    }

    render() {

        let isEnroll = this.props.currentUser.user.userData.classesTeaching.includes(this.props.selectedClass.selected_class._id) || this.props.currentUser.user.userData.classesTaking.includes(this.props.selectedClass.selected_class._id);

        const { name, location, startTime, endTime, startDate, endDate, instructor, students, seatsAvailable } = this.props.selectedClass.selected_class;
        console.log(this.props.selectedClass.selected_class);
        const button = isEnroll ? ('') : (<button onClick={this.addClass.bind(this)}>Add Class</button>);
        return (
            <div className="class-info">
                <h3><strong>{name}</strong></h3>
                <h4><strong>location:</strong>  {location}</h4>
                <h4><strong>Time:</strong>  {startTime} - {endTime}</h4>
                <h4><strong>Date:</strong>> {moment(startDate).format('MMMM Do YYYY')} - {moment(endDate).format('MMMM Do YYYY')}</h4>
                <h5><strong>Seats Available:</strong> {seatsAvailable}</h5>
                <h5><strong>Seats Left:</strong> {seatsAvailable - students.length}</h5>
                {button}
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedClass: state.classReducers,
        currentUser: state.userReducers
    }
}

ClassInfoPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { addFlashMessage, setCurrentUser })(ClassInfoPage);