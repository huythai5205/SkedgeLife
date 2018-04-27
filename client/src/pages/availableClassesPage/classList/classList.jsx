import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedClass } from '../../../redux/actions/classActions';
import PropTypes from "prop-types";
import moment from 'moment';


class ClassList extends Component {

    selectClass = event => {
        event.preventDefault();
        this.props.setSelectedClass(this.props.classData);
        this.context.router.history.push('./classInfoPage');
    }

    render() {
        const { name, startTime, endTime, startDate, endDate, seatsAvailable } = this.props.classData;
        return (
            <div className="classList row" onClick={this.selectClass.bind(this)}>
                <div className="col s3">{name}</div>
                <div className="col s3">{moment(startTime).format('h:mm a')} - {moment(endTime).format('h:mm a')}</div>
                <div className="col s3"> {moment(startDate).format('MMMM Do YYYY')} - {moment(endDate).format('MMMM Do YYYY')}</div>
                <div className="col s3">{seatsAvailable}</div>
            </div>
        );
    }
}

ClassList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { setSelectedClass })(ClassList);