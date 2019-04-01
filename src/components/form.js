import Options from './options';
import React from "react";
import Slider from "./slider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LabelForm(props) {
    return (
        <Form>
            {props.sliders.map((slider, i) => (
                <Slider key={i} id={slider.id} defaultValue={slider.value} setLabel={props.setLabel}
                        removeLabel={props.removeLabel}/>
            ))}
            <Form.Control type="text" id="url" placeholder="ngrok url.."/>
            <Options options={props.options} addLabel={props.addLabel}/>
            <Button variant="light" size='lg' className="middled" onClick={e => {
                e.preventDefault();
                const labels = document.querySelectorAll(".slider");
                const url = document.querySelector("#url");
                const payload = [...labels].map(label => [label.dataset.id, label.value]);
                props.generate(payload, url.value, true)
            }}>Создать ещё одну картину!</Button>
        </Form>
    );
}

export default LabelForm;