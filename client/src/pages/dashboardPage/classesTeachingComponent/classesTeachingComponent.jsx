import React, { Component } from 'react';
import './classesTeachingComponent.css';
import ClassList from '../classList/classList';
import axios from 'axios';

export default class ClassesTeachingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    onclick(event) {

        axios.post('/api/classes', this.props.aClassesTeaching).then(classesData => {
            const currentState = this.state;
            this.setState({ ...currentState, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="classesTeachingComponent">
                <button onClick={this.onclick.bind(this)}>click</button>
                {this.state.classes.map(classData => {
                    return (<ClassList classData={classData} />)
                })}
            </div>
        );
    }
}
