import React, { Component } from "react";
import "./createClassForm.css";
import axios from "axios";

import { Button, Icon, Row, Input } from "react-materialize";

export default class CreateClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      location: "",
      date: "",
      startTime: "",
      endTime: "",
      seatsAvailable: "",
      repeat: ""
    };

    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/class", this.state)
      .then(data => {
        // <Redirect to="/dashboard" />;
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="createClassForm">
        <Row>
          <Input
            id="className"
            s={6}
            label="Class Title"
            onChange={this.change}
          >
            <Icon>school</Icon>
          </Input>
          <Input id="location" s={6} label="Location" onChange={this.change}>
            <Icon>room</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            id="date"
            s={6}
            name="on"
            type="date"
            label="Date"
            onChange={this.change}
          >
            <Icon>today</Icon>
          </Input>
          <Input
            id="seatsAvailable"
            s={6}
            label="Seats Available"
            onChange={this.change}
          >
            <Icon>supervisor_account</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            id="startTime"
            s={6}
            name="on"
            type="time"
            label="Start Time"
            onChange={this.change}
          >
            <Icon>schedule</Icon>
          </Input>
          <Input
            id="endTime"
            s={6}
            name="on"
            type="time"
            label="End Time"
            onChange={this.change}
          >
            <Icon>restore</Icon>
          </Input>
        </Row>
        <Row>
          <Button waves="light" onClick={this.onSubmit} s={6}>
            Add Class<Icon left>cloud_upload</Icon>
          </Button>
          <Input
            id="repeat"
            s={6}
            type="select"
            label="Class Repeat"
            defaultValue="1"
            onChange={this.change}
          >
            <option value="1">None</option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>
          </Input>
        </Row>
      </div>
    );
  }
}
