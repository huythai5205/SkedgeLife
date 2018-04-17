import React, { Component } from "react";
import "./home.css";

//components:
import LandingPageCarousel from "../../components/landingPageCarousel/landingPageCarousel";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <LandingPageCarousel />
      </div>
    );
  }
}
