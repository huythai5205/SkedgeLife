import React, { Component } from 'react';
import './dashboardPage.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ClassesTeachingComponent from './classesTeachingComponent/classesTeachingComponent';

class DashboardPage extends Component {

    onSubmit = event => {
        event.preventDefault();
        this.context.router.history.push('/createClass');
    }

    render() {
        const { firstName, email, classesTeaching, classesTaking } = this.props.currentUser.user.userData;

        return (
            <div className="dashboardPage">
                <p>name {firstName}</p>
                <p>email {email}</p>
                <ClassesTeachingComponent aClassesTeaching={classesTeaching} />

                <button onClick={this.onSubmit.bind(this)}>create class</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducers
    }
}

DashboardPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(DashboardPage);