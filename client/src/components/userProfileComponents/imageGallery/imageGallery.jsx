import React, { Component } from "react";
import "./imageGallery.css";

import { Button, Icon, Row, Col, MediaBox } from "react-materialize";

export default class ImageGallery extends Component {
  render() {
    return (
      <div className="imageGallery">
        <Row>
          <section id="Gallery">
            <Col s={12}>
              <text className="sectionTitle">Gallery</text>
              <hr className="titleHr" />
              <Col s={3}>
                <MediaBox
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20882762_10156433251957646_9088984581825123599_n.jpg?_nc_cat=0&oh=ab12c1e1177988c1c6988ecaf24e6800&oe=5B524E48"
                  caption="A demo media box1"
                  width="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20914267_10156433251862646_612715201211043572_n.jpg?_nc_cat=0&oh=c0fa816ffab5f93da4133678d82eaffa&oe=5B6E0DBD"
                  caption="A demo media box1"
                  width="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src="https://lorempixel.com/350/350/nature/1"
                  caption="A demo media box1"
                  width="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src="https://lorempixel.com/350/350/nature/1"
                  caption="A demo media box1"
                  width="350"
                />
              </Col>
            </Col>
          </section>
        </Row>
      </div>
    );
  }
}
