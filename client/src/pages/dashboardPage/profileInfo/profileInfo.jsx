import React, { Component } from 'react';
import './profileInfo.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import { setSelectedClass } from '../../../redux/actions/classActions';


class ProfileInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    onclick(event) {

        axios.post('/api/classes', this.props.aProfileInfo).then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    selectClass = event => {
        event.preventDefault();
        this.props.setSelectedClass(this.props.classData);
        this.context.router.history.push('./profileInfoPage');
    }

    render() {
        const { firstName, email, classesTeaching, classesTaking } = this.props.currentUser.user.userData;
        return (
            <div className="profileInfo">
                <p>Profile Info is working</p>
            </div>
        );
    }
}

ProfileInfo.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, { setSelectedClass })(ProfileInfo);
