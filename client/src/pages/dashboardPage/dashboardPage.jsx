import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./dashboardPage.css";

//images
import calImg from "./images/googleCalimage.png";
import calImgSm from "./images/googleCalMonth.png";
import {
  Button,
  Icon,
  Modal,
  Row,
  Col,
  CardPanel,
  Card,
  Breadcrumb,
  MenuItem,
  Input,
  Collection,
  CollectionItem,
  Badge,
  Chip
} from "react-materialize";

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboardPage">
        <Row>
          <Col s={12}>
            <Col s={3}>
              <h4>My Schedule</h4>
              <img src={calImgSm} />
              <Collection header="My Classes">
                <CollectionItem href="#" active>
                  Classes Scheduled
                </CollectionItem>
                <CollectionItem href="#">Classes Taking</CollectionItem>
                <CollectionItem href="#">Following</CollectionItem>
                <CollectionItem href="#">Previous Classes</CollectionItem>
                <CollectionItem href="#">Students</CollectionItem>
                <CollectionItem href="#">
                  Payments<Badge newIcon>3</Badge>
                </CollectionItem>
              </Collection>
            </Col>
            {/* <Modal header="Modal Header" trigger={<Button>MODAL</Button>}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Modal> */}
            <Col s={9}>
              <ul>
                <li className="calendar-sort">
                  <Icon left className="icon-left">
                    event
                  </Icon>
                  <text style={{ color: "black" }}>Calendar View:</text>
                </li>
                <li className="calendar-sort">Daily</li>
                <li className="calendar-sort">Weekly</li>
                <li className="calendar-sort">Monthly</li>
                <li className="calendar-sort">Yearly</li>
              </ul>
              <Button>
                <Icon left>cast_connected</Icon>Add a class
              </Button>

              <img src={calImg} />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
