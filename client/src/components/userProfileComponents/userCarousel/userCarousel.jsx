import React, { Component } from "react";
import "./userCarousel.css";

import { Button, Icon, Row, Col, Carousel } from "react-materialize";

export default class UserCarousel extends Component {
  render() {
    return (
      <div className="userCarousel">
        <Carousel
          images={[
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/11666018_10153943550972646_326348185294632784_n.jpg?_nc_cat=0&oh=998fde3151de96b27d2b2e05135ef663&oe=5B5FD09E",
            "https://lorempixel.com/250/250/nature/2",
            "https://lorempixel.com/250/250/nature/3",
            "https://lorempixel.com/250/250/nature/4",
            "https://lorempixel.com/250/250/nature/5"
          ]}
          //   style={{ height: 400 }}
          //   options={{ fullWidth: true, indicators: true}}     <-- toggle this to change from small image to full-width
        />
      </div>
    );
  }
}
