import React from 'react';
import Form from '../containers/UsableForm';
import {Col, Row, Container} from 'react-bootstrap';
import ImageCarousel from "../containers/Images";


function MainPage(props) {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={3} xs={0}/>
                <Col md={6} xs={12}>
                    <ImageCarousel/>
                </Col>
                <Col className="kostyl" md={3} xs={12}>
                    <Form options={props.options}/>
                </Col>
            </Row>
            {/*<Row></Row>*/}
        </Container>
    );
}

export default MainPage;
