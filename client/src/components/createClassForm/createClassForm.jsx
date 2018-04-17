import React, { Component } from "react";
import "./createClassForm.css";
import { Button, Icon, Row, Col, CardPanel, Card } from "react-materialize";

export default class CreateClassForm extends Component {
  render() {
    return (
      <div className="createClassForm">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Beginners Yoga..."
                id="class_name"
                type="text"
                className="validate"
              />
              <label htmlFor="class_name">Class Name</label>
            </div>

            <div className="input-field col s6">
              <input id="location" type="text" className="validate" />
              <label htmlFor="location">Location</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input type="text" className="datepicker" />
              <label htmlFor="class_date" type="date">
                Class Date
              </label>
            </div>

            <div className="input-field col s6">
              <input id="class_time" type="text" className="timepicker" />
              <label htmlFor="class_time">Class Time</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="spots_avail" type="text" className="validate" />
              <label htmlFor="class_name">Spots available (optional)</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field left-align">
              <button className="btn" id="addClass" type="submit" name="action">
                Submit <i className="material-icons right">Add Class</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
