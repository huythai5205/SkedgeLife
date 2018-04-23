import React, { Component } from "react";
import "./profile.css";

import {
  Button,
  Icon,
  Row,
  Col,
  CardPanel,
  Card,
  Parallax,
  Slider,
  Slide
} from "react-materialize";

//components
import JumbotronCircleImg from "../../components/userProfileComponents/jumbotronCircleImg/jumbotronCircleImg";
import UserCarousel from "../../components/userProfileComponents/userCarousel/userCarousel";
import BioSection from "../../components/userProfileComponents/bioSection/bioSection";
import UserParallax from "../../components/userProfileComponents/userParallax/userParallax";
import Services from "../../components/userProfileComponents/services/services";
import ImageGallery from "../../components/userProfileComponents/imageGallery/imageGallery";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <JumbotronCircleImg />
        <UserCarousel />
        <Services />
        <UserParallax />
        <BioSection />
        <ImageGallery />
      </div>
    );
  }
}
