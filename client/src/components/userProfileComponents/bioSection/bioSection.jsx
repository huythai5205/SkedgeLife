import React, { Component } from "react";
import "./bioSection.css";

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

export default class BioSection extends Component {
  render() {
    return (
      <div className="bioSection">
        <Row>
          <section id="Bio">
            <Col s={12}>


              <Col s={6}>
                <img
                  className="bioImg"
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/11011840_10153806696202646_4181890955306727709_n.jpg?_nc_cat=0&oh=c1abd22bd73ee6ec9f3938987466cc0e&oe=5B5A9ED9"
                // src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/16314_916463375035357_1197585544742003711_n.jpg?_nc_cat=0&oh=3ee3c94bdb29df7ae19999036051fccf&oe=5B55231F"
                />
              </Col>
              <Col s={6}>
                <p className="bioText">

                 
                    <span className="sectionTitle">Bio</span>
                    <hr className="titleHr" />
                    Denae was born in Highlands Ranch Colorado and 1990, and expressed an
                    interest in art at a the young age of 12 years old when she first started painting.
                    Working mostly with acrylics on canvas to start out, she soon branched into other styles,
                    and begin to explore new modalities as an art student at Arapahoe Community College
                    and later at Metro State in downtown Denver.
                    <br /> <br />
                    Denae is an avid yogini and has taught for Corepower yoga studios around south Denver
                    for many years, and has been making custom painted yoga mats for friends and family
                    since 2010. She has recently ventured into the art world with her hand painted crafts, and moved off
                    the canvas to other media ranging from natural objects to 3D printed templates. Her work will be
                    available in her Etsy Store - coming soon!
                  
                </p>
              </Col>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}
