import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedClass } from '../../../redux/actions/classActions';
import PropTypes from "prop-types";


class ClassList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    // componentWillReceiveProps = (next) => {
    //     console.log(next);
    // }

    selectClass = event => {
        event.preventDefault();
        this.props.setSelectedClass(this.props.classData);
        this.context.router.history.push('./classInfoPage');
    }

    render() {
        console.log(this.props);
        const { _id, name, location, startTime, endTime, startDate, endDate } = this.props.classData;
        return (

            <div className="classList">
                <a onClick={this.selectClass.bind(this)}>Name: {name} location: {location} Start Time: {startTime} End Time: {endTime} Start Date: {startDate} End Date: {endDate}</a>
            </div>
        );
    }
}

ClassList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { setSelectedClass })(ClassList);