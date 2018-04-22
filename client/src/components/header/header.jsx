import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="logo-font-header">SkedgeLife</Link>
        <Link to="/login" className="header-link">
          login
        </Link>
        <Link to="/signUp" className="header-link">
          sign up
        </Link>
      </div>
    );
  }
}
