import React, { Component } from 'react';

import FlashMessage from './flashMessage';

import PropTypes from "prop-types";
import { connect } from 'react-redux';

class FlashMessageList extends Component {
    render() {
        const messages = this.props.messages.map(message => {
            console.log('div', message);
            console.log('message id', message.id);
            console.log('message text', message.text);
            <FlashMessage key={message.id} message={message.text} />
        });
        return (
            <div className="flashMessageList">
                {messages}{console.log(messages)}
            </div>
        );
    }
}

FlashMessageList.protoTypes = {
    messages: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessageList);