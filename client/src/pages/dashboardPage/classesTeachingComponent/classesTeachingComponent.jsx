import React, { Component } from 'react';
import './classesTeachingComponent.css';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import { setSelectedClass } from '../../../redux/actions/classActions';


class ClassesTeachingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    onclick(event) {

        axios.post('/api/classes', this.props.aClassesTeaching).then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    selectClass = event => {
        event.preventDefault();
        this.props.setSelectedClass(this.props.classData);
        this.context.router.history.push('./classInfoPage');
    }

    render() {
        return (
            <div className="classesTeachingComponent">
                <table>
                    <thead>
                        <tr>
                            <th>Class Name:</th>
                            <th>Time:</th>
                            <th>Date:</th>
                            <th>Seat Available:</th>
                            <th>Location: </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.classes.map(classData => {
                                return (
                                    <tr onClick={this.selectClass.bind(this)}>
                                        <td>{classData.name}</td>
                                        <td>{classData.startTime}-{classData.endTime}</td>
                                        <td>{classData.startDate}-{classData.endDate}</td>
                                        <td>{classData.seatsAvailable}</td>
                                        <td>{classData.Location}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

ClassesTeachingComponent.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, { setSelectedClass })(ClassesTeachingComponent);
