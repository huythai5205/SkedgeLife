import React, { Component } from 'react';
import './dashboardPage.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ClassesTeachingComponent from './classesTeachingComponent/classesTeachingComponent';
import ClassesTakingComponent from './classesTakingComponent/classesTakingComponent';
import ProfileInfo from './profileInfo/profileInfo';


import {
  Button,
  Icon,
  Modal,
  Row,
  Col,
  Collection,
  CollectionItem,
  Badge,
  Table
} from "react-materialize";

//components
import CreateClassForm from "../../components/createClassForm/createClassForm";

//images
import calImg from "./images/googleCalimage.png";
import calImgSm from "./images/googleCalMonth.png";

class DashboardPage extends Component {

  createClass = event => {
    event.preventDefault();
    this.context.router.history.push('/createClass');
  }


  render() {
    const { firstName, lastName, email, classesTeaching, classesTaking } = this.props.currentUser.user.userData;

    console.log(this.props.currentUser.user.userData);
    return (
      <div className="dashboardPage">

        <Row>
          <Col s={12}>
            <Col s={3}>
              <div className="left-sidebar">
                <h4>My Schedule</h4>
                <img className="dropShadow" src={calImgSm} alt="" />
                <Collection className="dropShadow" header="My Classes">
                  <Modal
                    header="Classes Teaching"
                    bottomSheet
                    className="classesTeachingModal"
                    trigger={
                      <CollectionItem href="#" data-target=".classesTeachingModal" active>
                        Classes Teaching
                       </CollectionItem>
                    }
                  >
                    <ClassesTeachingComponent aClassesTeaching={classesTeaching} />
                  </Modal>

                  <Modal
                    header="Classes Taking"
                    bottomSheet
                    className="classesTakingModal"
                    trigger={
                      <CollectionItem href="#" data-target=".classesTakingModal">
                        Classes Taking
                       </CollectionItem>
                    }
                  >
                    <ClassesTakingComponent aClassesTaking={classesTaking} />
                  </Modal>
                  <CollectionItem href="#">Following</CollectionItem>
                  <CollectionItem href="#">Previous Classes</CollectionItem>
                  <CollectionItem href="#">Students</CollectionItem>
                  <Modal
                    header="Payment History"
                    bottomSheet
                    className="paymentModal"
                    trigger={
                      <CollectionItem href="#" data-target=".paymentModal">
                        Payments<Badge newIcon>3</Badge>
                      </CollectionItem>
                    }
                  >
                    <Table>
                      <thead>
                        <tr>
                          <th data-field="id">Name</th>
                          <th data-field="name">Class</th>
                          <th data-field="price">Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Erique</td>
                          <td>Haircut</td>
                          <td>$60.00</td>
                        </tr>
                        <tr>
                          <td>Danathan</td>
                          <td>Guitar lesson</td>
                          <td>$45.00</td>
                        </tr>
                        <tr>
                          <td>Mikhal</td>
                          <td>Yurt consultation</td>
                          <td>$75.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Modal>
                </Collection>
              </div>
            </Col>

            <Col s={9}>
              <ul>
                <li className="calendar-sort">
                  <Icon left className="icon-left">
                    event
                  </Icon>
                  <text style={{ color: "black" }}>Calendar View:</text>
                </li>
                <li className="calendar-sort">Daily</li>
                <li className="calendar-sort">Weekly</li>
                <li className="calendar-sort">Monthly</li>
                <li className="calendar-sort">Yearly</li>
                <li className="dashboard-top-button">
                  <Button onClick={this.createClass.bind(this)}>
                    <Icon left>add_box</Icon>Create a class
                      </Button>
                </li>
                <li className="dashboard-top-button">
                  <Modal
                    header="Profile Information"
                    trigger={
                      <Button>
                        <Icon left>account_box</Icon>Profile
                      </Button>
                    }
                  >
                    Currently Logged in as:
                  <p>name: {firstName} {lastName}</p>
                    <p>email: {email}</p>
                    {/* <ProfileInfo /> */}
                  </Modal>
                </li>
              </ul>

              <img src={calImg} className="dropShadow" alt="" />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducers
  }
}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(DashboardPage);
