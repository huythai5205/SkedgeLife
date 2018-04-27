import React, { Component } from "react";
import "./userContactForm.css";

import { Row, Col, Input, Icon, CardPanel, Button } from "react-materialize";

export default class UserContactForm extends Component {
    render() {
        return (
            <div className="userContactForm">
                <section id="#Contact" className="pink-form-box">
                    <span className="sectionTitle">Contact Denae</span>
                    <hr className="titleHr" />
                    <CardPanel className="white">
                        <Row>

                            <Input s={6} label="Name" validate><Icon>account_circle</Icon></Input>
                            <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                        </Row>
                        <Row>
                            <Input label="Message" type='textarea' />
                            <Button><Icon>send</Icon>Send</Button>

                        </Row>
                    </CardPanel>
                </section>
            </div>
        );
    }
}
