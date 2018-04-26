import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedClass } from '../../../redux/actions/classActions';
import PropTypes from "prop-types";


class ClassList extends Component {

    selectClass = event => {
        event.preventDefault();
        this.props.setSelectedClass(this.props.classData);
        this.context.router.history.push('./classInfoPage');
    }

    render() {
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