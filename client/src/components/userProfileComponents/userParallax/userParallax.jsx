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
            <div className="parallax-content" style={{ textAlign: "center" }}>
              <h5>
                "I love making art, and making people smile! If there's anything I can do to put a smile on your face, whether it's a trunk show,
                 custom artwork or yoga mat, or a painting class for you and your friends and family, reach out and let me know!"</h5>
            </div>
            <Parallax imageSrc={userParallaxImage} style={{ position: "fixed" }} />
          </div>
        </Col>
      </div>
    );
  }
}
