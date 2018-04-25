import React, { Component } from "react";
import "./dashboard.css";
import {
  Button,
  Icon,
  Row,
  Col,
  SideNav,
  SideNavItem
} from "react-materialize";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col s={4} className="left-nav">
            SideBar
          </Col>
          <Col s={8} className="Right">
            <div className="calendar-container">
              <img src="./images/calendar" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
