import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h4 className="logo-font-header">SkedgeLife</h4>
        <a className="header-link" href="#">
          login
        </a>
        <a className="header-link" href="#">
          sign up
        </a>
      </div>
    );
  }
}
