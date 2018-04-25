import React, { Component } from 'react';
import './dashboardPage.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ClassesTeachingComponent from './classesTeachingComponent/classesTeachingComponent';


import {
  Button,
  Icon,
  Modal,
  Row,
  Col,
  CardPanel,
  Card,
  Breadcrumb,
  MenuItem,
  Input,
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

  onSubmit = event => {
    event.preventDefault();
    this.context.router.history.push('/createClass');
  }


  render() {
    const { firstName, email, classesTeaching, classesTaking } = this.props.currentUser.user.userData;

    return (
      <div className="dashboardPage">
        <p>name {firstName}</p>
        <p>email {email}</p>
        {/* <ClassesTeachingComponent aClassesTeaching={classesTeaching} /> */}

        <button onClick={this.onSubmit.bind(this)}>create class</button>
        <Row>
          <Col s={12}>
            <Col s={3}>
              <div className="left-sidebar">
                <h4>My Schedule</h4>
                <img className="dropShadow" src={calImgSm} />
                <Collection className="dropShadow" header="My Classes">
                  <CollectionItem href="#" active>
                    Classes Scheduled
                  </CollectionItem>
                  <CollectionItem href="#">Classes Taking</CollectionItem>
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
                  <Modal
                    header="Add a class"
                    trigger={
                      <Button>
                        <Icon left>add_box</Icon>Add a class
                      </Button>
                    }
                  >
                    <CreateClassForm />
                  </Modal>
                </li>
                <li className="dashboard-top-button">
                  <Modal
                    header="Profile"
                    trigger={
                      <Button>
                        <Icon left>account_box</Icon>Profile
                      </Button>
                    }
                  />
                </li>
              </ul>

              <img src={calImg} className="dropShadow" />
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
