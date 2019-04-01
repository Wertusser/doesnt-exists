import React from 'react'
import {GAN_LABELS} from '../static/labels';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Col, Row} from 'react-bootstrap';

function debounce(f, ms) {
    let timer = null;
    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        };
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
}

function Slider(props) {
    const handleChange = debounce(input => {
        console.log("changed", input.dataset.id, input.value);
        props.setLabel(input.dataset.id, input.value);
    }, 100);

    function RemoveLabel(e) {
        e.preventDefault();
        const input = document.querySelector(e.currentTarget.dataset.label);
        props.removeLabel(input.dataset.id);
    }

    return (
        <Row>
            <Col md={10}>
                <Form.Group>
                    <Form.Label>{GAN_LABELS[props.id]}</Form.Label>
                    <Form.Control className="slider" type="range" max="1" min="0" data-id={props.id}
                                  defaultValue={props.value} step="any"
                                  name={GAN_LABELS[props.id]} id={`slider-${props.id}`}
                                  onChange={e => handleChange(e.target)}/>

                </Form.Group>
            </Col>
            <Col md={2}>
                <Button variant="" className="close close-a" block data-label={`#slider-${props.id}`}
                        onClick={e => RemoveLabel(e)}>&times;</Button>
            </Col>
        </Row>
    );
}

export default Slider;
