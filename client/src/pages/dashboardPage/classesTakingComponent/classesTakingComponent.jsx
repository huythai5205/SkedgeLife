import React, { Component } from 'react';
import './classesTakingComponent.css';
import axios from 'axios';

export default class classTaking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
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
        axios.post('/api/classes', this.props.aClassesTaking).then(classesData => {
            const currentState = this.state;
            this.setState({ ...currentState, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="classesTeachingComponent">
                <button onClick={this.onclick.bind(this)}>click</button>
                <p>{JSON.stringify(this.state.classes)}</p>
            </div>
        );
    }
}

