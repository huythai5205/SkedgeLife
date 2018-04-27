import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import { setSelectedClass } from '../../redux/actions/classActions';
import ClassList from './classList/classList';



class AvailableClassesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            classes: []
        }
    }

    componentDidMount() {
        axios.get('./api/classes').then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => console.log(err));
    }

    selectClass = event => {
        event.preventDefault();
        // this.props.setSelectedClass(this.props.classData);
        // this.context.router.history.push('./classInfoPage');
        console.log(event.target);
    }

    render() {
        return (
            <div className="availableClassesPage" >

                <div className="row">
                    <div className="col s3">Class Name:</div>
                    <div className="col s3">Time:</div>
                    <div className="col s3">Date:</div>
                    <div className="col s3" th>Seat Available:</div>
                </div>

                {
                    this.state.classes.map(classData => {
                        return (

                            this.state.classes.map(classData => {
                                return (<ClassList classData={classData} />)
                            })
                        )
                    })
                }
            </div>
        );

    }


}

AvailableClassesPage.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, { setSelectedClass })(AvailableClassesPage);
