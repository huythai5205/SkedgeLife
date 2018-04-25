import React, { Component } from "react";
import "./jumbotronCircleImg.css";

import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel,
  Card,
  Parallax,
  Slider,
  Slide,
  Navbar,
  NavItem,
  Text
} from "react-materialize";

export default class JumbotronCircleImg extends Component {
  render() {
    return (
      <div className="jumbotronCircleImg">
        <Col s={12}>
          <Navbar
            //   brand="Denae Michele Art & Yoga"
            right
            style={{ backgroundColor: "#fff" }}
          >
            <NavItem href="#Services">
              <text className="NavLinkFont">Services</text>
            </NavItem>
            <NavItem href="#Bio">
              <text className="NavLinkFont">Bio</text>
            </NavItem>

            <NavItem href="#Gallery">
              <text className="NavLinkFont">Gallery</text>
            </NavItem>
            <NavItem href="#Calendar">
              <text className="NavLinkFont">Calendar</text>
            </NavItem>
            <NavItem href="#Reviews">
              <text className="NavLinkFont">Reviews</text>
            </NavItem>
            <NavItem href="#Contact">
              <text className="NavLinkFont">Contact</text>
            </NavItem>
          </Navbar>
          <div className="logoBar">
            <img
              className="jumbotronImg"
              src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/13238920_10154776488097646_2276338440612428685_n.jpg?_nc_cat=0&oh=49adbd5dc535c9242b55be585dca7785&oe=5B9D5D00"
            />
            <text className="LogoFont">Denae Michele Yoga & Art</text>
          </div>
        </Col>
      </div>
    );
  }
}
