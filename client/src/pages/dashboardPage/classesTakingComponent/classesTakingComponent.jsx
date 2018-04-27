import React, { Component } from 'react';
import './classesTakingComponent.css';
import axios from 'axios';
import moment from 'moment';

export default class ClassTakingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    onclick = event => {
        axios.post('/api/classes', this.props.aClassesTaking).then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="classesTakingComponent">
                <button onClick={this.onclick.bind(this)}>click</button>
                <table className="center">
                    <thead>
                        <tr>
                            <th>Class Name:</th>
                            <th>Location:</th>
                            <th>Time:</th>
                            <th>Date:</th>
                            <th>Seats Available</th>
                        </tr>
                    </thead>
                    {this.state.classes.map(classData => {
                        return (
                            <tr>
                                <td>{classData.name}</td>
                                <td>{classData.location}</td>
                                <td>{moment(classData.startTime).format('h:mm a')} - {moment(classData.endTime).format('h:mm a')}</td>
                                <td>{moment(classData.startDate).format('MMMM Do YYYY')} - {moment(classData.endDate).format('MMMM Do YYYY')}</td>
                                <td>{classData.seatsAvailable}</td>
                            </tr>
                        )
                    })}

                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
