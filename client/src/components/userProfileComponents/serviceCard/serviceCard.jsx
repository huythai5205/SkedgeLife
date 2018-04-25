import React, { Component } from "react";
import "./serviceCard.css";

import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel,
  Card,
  CardTitle
} from "react-materialize";

export default class ServiceCardImg extends Component {
  render() {
    return (
      <div className="serviceCard">
        <Row>
          <Col m={4} s={12}>
            <Card
              className="purple lighten-1"
              textClassName="white-text"
              title="Custom Yoga Mats"
              actions={[
                <a href="#Gallery">
                  <Icon className="link-icon">favorite</Icon>Image Gallery
                </a>
              ]}
            >
              Let me make a custom, hand-painted yoga mat for you or a friend! I
              can get you the mat you want and paint it to your specifications
              for a one of a kind gift!
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="purple lighten-1"
              textClassName="white-text"
              title="Paintings and Crafts"
              actions={[
                <a href="#Gallery">
                  <Icon className="link-icon">collections</Icon>Etsy Store
                </a>
              ]}
            >
              Visit my Etsy store to see current paintings for sale and my
              latest crafts. Buy Jewelry, Masks, and get your Candy Skulls for
              Cinco De Mayo!
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="purple lighten-1"
              textClassName="white-text"
              title="Cocktail and Canvas Events"
              actions={[
                <a href="#Calender">
                  <Icon className="link-icon">event_note</Icon>Schedule and
                  Events
                </a>
              ]}
            >
              Setup a private canvas and cocktails event at your location, or
              come join one of my weekly Brews n' Brushes event around town!
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
