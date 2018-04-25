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
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/262549_10151885848147646_1725520846_n.jpg?_nc_cat=0&oh=5a3241fdde1fb222588fada9d4e12ab8&oe=5B5B6D0C",
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/530970_10151506640987646_1205521750_n.jpg?_nc_cat=0&oh=60d9309813005c57ad061d2e3c8c1576&oe=5B5676E0",
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1006340_10152183959512646_970698110_n.jpg?_nc_cat=0&oh=88e6e201ea4af5f6b4867bd463265d2d&oe=5B63BC64",
            "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/19420413_10156221600987646_3368452771993712417_n.jpg?_nc_cat=0&oh=719e22371953e844d2decb38023d8719&oe=5B655813"
          ]}
          //   style={{ height: 400 }}
          //   options={{ fullWidth: true, indicators: true}}     <-- toggle this to change from small image to full-width
        />
      </div>
    );
  }
}
