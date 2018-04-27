import React, { Component } from "react";
import "./userProfilePage.css";

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
import UserContactForm from "../../components/userProfileComponents/userContactForm/userContactForm";

export default class UserProfilePage extends Component {
  render() {
    return (
      <div className="userProfilePage">
        <JumbotronCircleImg />
        <UserCarousel />
        <Services />
        <UserParallax />
        <BioSection />
        <ImageGallery />
        <UserContactForm />
      </div>
    );
  }
}
