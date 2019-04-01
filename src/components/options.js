import React from 'react';
import Form from "react-bootstrap/Form";
import {Col, Row} from 'react-bootstrap';


function Options(props) {
    return (
        <Form.Group>
            <Row>
                <Col>
                    <Form.Control as="select" id="select-label" onChange={e => {
                        e.preventDefault();
                        const input = document.querySelector("#select-label");
                        props.addLabel(input.value);
                    }}>
                        {props.options.map((item, i) => (
                            <option key={i} value={i}>{i + 1} - {item}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
        </Form.Group>
    );
}

export default Options;
