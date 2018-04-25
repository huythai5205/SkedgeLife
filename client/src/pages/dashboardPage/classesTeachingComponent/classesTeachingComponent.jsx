import React, { Component } from 'react';
import './classesTeachingComponent.css';
import axios from 'axios';

export default class ClassesTeachingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: {}
        }
        console.log(props);
    }

    // componentWillMount = () => {
    //     const currentState = this.state;

    //   }

    //   componentWillReceiveProps = (next) => {
    //     if (next.currentUser) {
    //      axios.post('/api/classes', this.state).

    //     }
    //   }
    onclick = event => {
        axios.post('/api/classes', this.props.aClassesTeaching).then(classesData => {
            console.log(classesData.data);
            // const currentState = this.state;
            // this.setState({ ...currentState, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="classesTeachingComponent">
                <button onClick={this.onclick.bind(this)}>click</button>
                {this.state.classes}
            </div>
        );
    }
}

