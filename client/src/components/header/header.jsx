import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./header.css";
import PropTypes from "prop-types";
import { logout } from '../../redux/actions/userActions';

class Header extends Component {


  logout = event => {
    event.preventDefault()
    this.props.logout();
    this.context.router.history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props.currentUser;

    const userLinks = (<div>
      <Link to="/dashboardPage" className="header-link">
        dashboard
        </Link>
      <Link to="/profilePage" className="header-link">
        profile
        </Link>
      <a onClick={this.logout.bind(this)}>Logout</a>
    </div>
    );

    const guestLinks = (
      <div>
        <Link to="/login" className="header-link">
          login
    </Link>
        <Link to="/signUp" className="header-link">
          sign up
    </Link>
      </div>
    );

    return (
      <div className="header">
        <Link to="/" className="logo-font-header">SkedgeLife</Link>

        <div>
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </div>
    );
  }
}

Header.propsTypes = {
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducers
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { logout })(Header);