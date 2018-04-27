import React, { Component } from "react";
import "./homePage.css";

//components:
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SignUpUserForm from "../../components/signUpUserForm/signUpUserForm";

import {
  Icon, Row, Col,
  Card,
  CardPanel,
  Parallax,
  Slider,
  Slide,
  Button,
  Modal
} from "react-materialize";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Slider>
            <Slide
              src="https://www.uwishunu.com/wp-content/uploads/2016/07/Outdoor-Yoga-The-Oval-Image-1280uw.jpg"
              title="Organize your own event"
              style={{ paddingTop: 80 }}
            >
              <Button>Learn more</Button>
            </Slide>
            <Slide
              src="https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,q_auto/v1494865224/Blog/college_students.jpg"
              title="Setup a Workshop"
              style={{ paddingTop: 80 }}
            >
              <Button>Learn more</Button>
            </Slide>
            <Slide
              src="http://freelancingamerica.com/wp-content/uploads/2015/12/taliking-open-air.jpg"
              title="Schedule and get paid for services"
              style={{ paddingTop: 80 }}
            >
              <Button>Learn more</Button>
            </Slide>
          </Slider>
        </Row>
        <Row>
          <Col m={4} s={12}>
            <Card
              className="teal lighten-4 black-text"
              title="Customize your Web Presence"
              actions={[
                <a >
                  <Icon className="link-icon">devices</Icon>
                  View Templates
                </a>
              ]} >
              You could be a fitness instructor or massage therapist, a guitar
              teacher, a handyman… Anyone with a schedule and a service can use
              SkedgeLife to setup sessions both online and in person. Our
              templates allow you to customize your profile page to fit you
              needs.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="teal lighten-4 black-text"
              title="Create your own Schedule"
              actions={[
                <a>
                  <Icon className="link-icon">event_note</Icon>View Scheduling
                  Demo
                </a>
              ]} >
              If you have a skill or trade, why work for someone else? Setup
              your own business to take payments in person, online, or even on a
              monthly or subscription basis. You could work from anywhere! Keep
              your clients posted on your latest schedule and availability.{" "}
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Modal
              header="Sign Up"
              trigger={
                <Card
                  className="teal lighten-4"
                  title="Sign up for Free!"
                  actions={[
                    <a >
                      <Icon className="link-icon">edit</Icon>
                      Sign Up for Free
                </a>
                  ]} >
                  Anyone can sign up for a free profile page. Whether you want to
                  share your bio and schedule, or locate a class or service and sign
                  up and pay directly. Students can follow their favorites, get
                  notifications on your latest news and schedule updates, and even
                  leave reviews!
            </Card>
              }
            >
              <SignUpUserForm />
            </Modal>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={12}>
            <h4> Why use SkedgeLife?</h4>
            <CardPanel className="grey lighten-3 black-text">
              <p>SkedgeLife is designed with the independent business in mind. We believe that if you have a skill or service, you should be able to share it easily!
                In a world of student loans and overpriced degrees, you shouldn't need to go into debt to learn a new skill or trade.
                Similarly, why pay too much for services when you can go direct to the source? With SkedgeLife, you can find someone directly
            to assist with you with a home repair or service and read their reviews. Need a logo or website? No problem! Find someone local who can help!</p>
              <p>What if you have a number of different skills or services your provide?
              This where our App can be very handy! Many of us are yoga teachers, fitness instructors, hair stylists, massage therapists...
              You could be working from multiple locations, including several businesses along with your own private clients. In many industries it is frowned upon
              to promote your other services or locations from one business to the next. At SkedgeLife we say no way! Put all of your schedules and services in one place,
              and allow your students, clients, and followers to sign up and pay you directly through the App. You could even setup a workshop, seminar, or retreat,
              or take recurring or monthly payments for ongoing business.</p>
            </CardPanel>
          </Col>
        </Row>
        <Row>
          <div className="parallax-container">

            <div className="parallax-content" style={{ textAlign: "center" }}>
              <h4>Testimonials:</h4>
              <h5>
                "Thanks to SkedgeLife, I can schedule my remote consulting sessions any time, any place."</h5>
              <p>- Some Guy</p>
            </div>


            <Parallax
              imageSrc="http://www.free-background-wallpaper.com/images/wallpapers/1680x1050/beautiful-wallpapers/sunset-beach-scotland.jpg"
              style={{ position: "fixed" }}
            />
          </div>
        </Row>
      </div>
    );
  }
}
