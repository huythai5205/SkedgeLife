import React, { Component } from 'react';
import './classInfoPage.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from 'axios';


class ClassInfoPage extends Component {

    addClass = event => {
        event.preventDefault();
        console.log(this.props.selectedClass.selected_class);
        axios.post('/api/addingClass/' + this.props.currentUser.user.userData._id, this.props.selectedClass.selected_class._id).catch(err => console.log(err));
    }

    render() {
        const { name, location, startTime, endTime, instructor, students } = this.props.selectedClass.selected_class;
        console.log(this.props.selectedClass);
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

export default connect(mapStateToProps)(ClassInfoPage);