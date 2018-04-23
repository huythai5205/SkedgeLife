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
      <div className="BioSection">
        <Row>
          <section id="Bio">
            <Col s={12}>
              <text className="sectionTitle">Bio</text>
              <hr className="titleHr" />

              <Col s={6}>
                <img
                  className="bioImg"
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/11011840_10153806696202646_4181890955306727709_n.jpg?_nc_cat=0&oh=c1abd22bd73ee6ec9f3938987466cc0e&oe=5B5A9ED9"
                  // src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/16314_916463375035357_1197585544742003711_n.jpg?_nc_cat=0&oh=3ee3c94bdb29df7ae19999036051fccf&oe=5B55231F"
                />
              </Col>
              <Col s={6}>
                <p>
                  <text className="bioText">
                    Rembrandt was born in Leiden in the Netherlands in 1606. It
                    was during a period known as the ‘Dutch Golden Age’. He came
                    from a reasonably wealthy family. His father was a miller
                    and somehow managed to send his son to a Latin school and
                    later the University of Leiden. His education and knowledge
                    of scriptures later proved important when he sought to
                    capture the essence of biblical scenes in his art.
                    <br />
                    However, Rembrandt wasn’t inspired by studying and he left
                    university to begin an apprenticeship as a painter in
                    Leiden. In 1624, he spent his first period of time in
                    Amsterdam where he was able to study under a famous painter
                    called Pieter Lastman. With this period of apprenticeship
                    under his belt, he returned to his hometown in Leiden and
                    set up his own independent workshop.
                  </text>
                </p>
              </Col>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}
