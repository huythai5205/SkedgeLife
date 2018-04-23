import React, { Component } from "react";
import "./serviceCardImg.css";

import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel,
  Card,
  CardTitle,
  Parallax,
  Slider,
  Slide,
  Navbar,
  NavItem,
  Text
} from "react-materialize";

export default class ServiceCardImg extends Component {
  render() {
    return (
      <div className="serviceCardImg">
        <Row>
          <Col m={4} s={12}>
            <Card
              horizontal
              header={
                <CardTitle image="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20882059_10156433251962646_5167814019461517285_n.jpg?_nc_cat=0&oh=9b4f04eaa8dc8f218a398de67f0313c2&oe=5B6D04C8" />
              }
              actions={[<a href="#">Etsy Store</a>]}
            >
              <p>Contact me about my custom yoga mats!</p>
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              horizontal
              header={
                <CardTitle image="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20914267_10156433251862646_612715201211043572_n.jpg?_nc_cat=0&oh=c0fa816ffab5f93da4133678d82eaffa&oe=5B6E0DBD" />
              }
              actions={[<a href="#">Etsy Store</a>]}
            >
              <p>Contact me about my custom yoga mats!</p>
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              horizontal
              header={
                <CardTitle image="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20914267_10156433251862646_612715201211043572_n.jpg?_nc_cat=0&oh=c0fa816ffab5f93da4133678d82eaffa&oe=5B6E0DBD" />
              }
              actions={[<a href="#">Etsy Store</a>]}
            >
              <p>Contact me about my custom yoga mats!</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
