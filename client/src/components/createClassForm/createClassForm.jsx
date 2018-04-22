import React, { Component } from "react";
import "./createClassForm.css";
import { Button, Icon, Row, Input } from "react-materialize";

export default class CreateClassForm extends Component {
  render() {
    return (
      <div className="createClassForm">
        <Row>
          <Input id="name" s={6} label="Class Title" onChange={this.change}>
            <Icon>school</Icon>
          </Input>
        </Row>
        <Row>
          <Input id="location" s={6} label="Location" onChange={this.change}>
            <Icon>location_city</Icon>
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
        </Row>
        <Row>
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
          <Input
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
        <Row>
          <Button waves="light" onClick={this.onSubmit} s={6}>
            Add Class<Icon left>cloud_upload</Icon>
          </Button>
        </Row>
      </div>
    );
  }
}
