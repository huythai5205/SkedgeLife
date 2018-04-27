import React, { Component } from "react";
import "./imageGallery.css";

import { Row, Col, MediaBox } from "react-materialize";

//images

import Gal1 from "/Users/imac/Documents/Sites/SkedgeLife/client/src/components/userProfileComponents/imageGallery/imagesDenae/galleryBob.png";
import Gal2 from "/Users/imac/Documents/Sites/SkedgeLife/client/src/components/userProfileComponents/imageGallery/imagesDenae/gallerySunBurst.png";
import Gal3 from "./imagesDenae/galleryTreeGirl.png";
import Gal4 from "./imagesDenae/galleryTurtle.png";
import Gal5 from "./imagesDenae/galleryLotus.png";
import Gal6 from "./imagesDenae/imageSwirlyTree.jpeg";
import Gal7 from "./imagesDenae/imageTheKiss.jpeg";


export default class ImageGallery extends Component {
  render() {
    return (
      <div className="imageGallery">

        <section id="Gallery">
          <Col s={12}>
            <Row>

              <text className="sectionTitle">Gallery</text>
              <hr className="titleHr" />
              <Col s={3}>
                <MediaBox
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20882762_10156433251957646_9088984581825123599_n.jpg?_nc_cat=0&oh=ab12c1e1177988c1c6988ecaf24e6800&oe=5B524E48"
                  caption="Yoga Mat for my mom"
                  width="350"
                  height="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/20914267_10156433251862646_612715201211043572_n.jpg?_nc_cat=0&oh=c0fa816ffab5f93da4133678d82eaffa&oe=5B6E0DBD"
                  caption="This mat sold at a charity auction for $100!"
                  width="350"
                  height="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src={Gal1}
                  caption="Bob Marley Painting"
                  width="350"
                  height="350"
                />
              </Col>
              <Col s={3}>
                <MediaBox
                  src={Gal2}
                  caption="An experiment with Color and Texture"
                  width="350"
                  height="350"
                />
              </Col>
            </Row>

            <Row>
              <Col s={3}>
                <MediaBox
                  src={Gal3}
                  caption="An experiment with Color and Texture"
                  width="350"
                  height="350"
                />
              </Col>

              <Col s={3}>
                <MediaBox
                  src={Gal4}
                  caption="An experiment with Color and Texture"
                  width="350"
                  height="350"
                />
              </Col>

              <Col s={3}>
                <MediaBox
                  src={Gal5}
                  caption="An experiment with Color and Texture"
                  width="350"
                  height="350"
                />
              </Col>

              <Col s={3}>
                <MediaBox
                  src={Gal6}
                  caption="An experiment with Color and Texture"
                  width="350"
                  height="350"
                />
              </Col>

            </Row>


          </Col>
        </section>
      </div >
    );
  }
}
