import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import './profilePage.css';



class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = event => {
        this.context.router.history.push('/createClass');
    }

    render() {
        return (
            <div className="profile">
                <p>{JSON.stringify(this.props.currentUser)}</p>
                <button onClick={this.onSubmit}>creat class</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducers
    }
}

ProfilePage.contextTypes = {
    router: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(ProfilePage);