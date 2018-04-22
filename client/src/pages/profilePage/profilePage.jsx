import React, { Component } from 'react';
import { connect } from 'react-redux';
import './profilePage.css';



class ProfilePage extends Component {
    render() {
        return (
            <div className="profile">
                <p>{JSON.stringify(this.props.currentUser)}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducers
    }
}

export default connect(mapStateToProps)(ProfilePage);