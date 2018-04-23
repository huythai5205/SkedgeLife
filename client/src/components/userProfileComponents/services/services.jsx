import React, { Component } from "react";
import "./services.css";

import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel,
  Card,
  CardTitle
} from "react-materialize";

//components
import ServiceCard from "../serviceCard/serviceCard";
import ServiceCardImg from "../serviceCardImg/serviceCardImg";

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <Row>
          <section id="Services">
            <Col s={12}>
              <text className="sectionTitle">Services</text>
              <hr className="titleHr" />
              <ServiceCard />
              {/* <ServiceCardImg /> */}
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}
