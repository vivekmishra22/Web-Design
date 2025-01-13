import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import ContactImage from "../Assets/Images/image 469.png";

const Contact = () => {
    return (
        <>
            <Container>
                <Row className="px-4">
                    <Col md={12}>
                        <h3 className="text-danger fw-bold ms-auto text-end">Our client</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                    <Image src={ContactImage} className="" />
                    </Col>
                    <Col md={5}></Col>
                </Row>

            </Container>
        </>
    )
}

export default Contact;
