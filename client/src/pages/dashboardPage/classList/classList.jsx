import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ClassList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    // componentWillReceiveProps = (next) => {
    //     console.log(next);
    // }

    render() {
        console.log(this.props);
        const { _id, name, location, startTime, endTime, startDate, endDate } = this.props.classData;
        return (

            <div className="classList">
                <Link to="/pageInfo">Name: {name} location: {location} Start Time: {startTime} End Time: {endTime} Start Date: {startDate} End Date: {endDate}</Link>
            </div>
        );
    }
}

