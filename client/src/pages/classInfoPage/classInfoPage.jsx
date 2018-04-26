import React, { Component } from 'react';
import './classInfoPage.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from 'axios';
import { addFlashMessage } from '../../redux/actions/flashMessageActions';
import setAuthorization from '../../utils/setAuthorization';
import { setCurrentUser } from '../../redux/actions/userActions';
import jwt from 'jsonwebtoken';

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
        const { name, location, startTime, endTime, instructor, students } = this.props.selectedClass.selected_class;
        return (

            <div className="class-info">
                <p>name:  {name}</p>
                <p>location:  {location}</p>
                <p>start time:  {startTime}</p>
                <p>end time  {endTime}</p>
                <p>instructor: {instructor}</p>
                <p>students: {students}</p>
                <button onClick={this.addClass.bind(this)}>Add Class</button>
            </div>
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