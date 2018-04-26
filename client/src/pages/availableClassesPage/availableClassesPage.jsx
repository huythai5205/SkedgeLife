import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';


class AvailableClassesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            classes: {}
        }
    }

    componentDidMount() {
        axios.get('./api/classes').then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="availableClassesPage" >

            </div>
        );

    }




}

AvailableClassesPage.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, )(AvailableClassesPage);
