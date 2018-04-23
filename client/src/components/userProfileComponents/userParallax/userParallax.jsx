import React, { Component } from "react";
import "./userParallax.css";

import { Row, Col, Parallax } from "react-materialize";
import userParallaxImage from "./images/skylineParallax.jpg";

//components
import ServiceCardImg from "../userParallax/userParallax";

export default class UserParallax extends Component {
  render() {
    return (
      <div className="userParallax">
        <Col s={12}>
          <div className="parallax-container">
            <Parallax imageSrc={userParallaxImage} />
          </div>
        </Col>
      </div>
    );
  }
}
