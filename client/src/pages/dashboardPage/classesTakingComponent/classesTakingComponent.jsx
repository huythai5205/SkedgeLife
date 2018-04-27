import React, { Component } from 'react';
import './classesTakingComponent.css';
import ClassList from '../classList/classList';
import axios from 'axios';

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
                {this.state.classes.map(classData => {
                    return (<ClassList classData={classData} />)
                })}
            </div>
        );
    }
}
