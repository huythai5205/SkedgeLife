import React, { Component } from 'react';
import FlashMessage from './flashMessage';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../redux/actions/flashMessageActions'

class FlashMessageList extends Component {
    render() {
        const messages = this.props.messages.map(message => {
            return <FlashMessage message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
        });
        return (
            <div> {messages} </div>
        );
    }
}

FlashMessageList.protoTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessageReducers
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);