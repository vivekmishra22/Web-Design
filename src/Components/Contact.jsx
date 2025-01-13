import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import ContactImage from "../Assets/Images/image 469.png";

const Contact = () => {
    return (
        <>
            <Container fluid className='p-5'>
                <Row>
                    <Col md={8}></Col>
                    <Col md={4} className='d-flex justify-content-center'>
                        <h3 className="text-danger fw-bold">Contact us</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Image src={ContactImage} className="w-100" />
                    </Col>
                    <Col md={4}>
                        <div className='bg-danger-subtle rounded-bottom-4 h-100'>

                            <Button className="client-button w-100 border-0 rounded-0 rounded-bottom-4 fs-4">Tell Us Your Requirement</Button>

                            <Form className='p-5'>

                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Name*" className="rounded-pill" />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control type="number" placeholder="Mobile No.*" className="rounded-pill" />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Address*" className="rounded-pill" />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Product / Services*" className="rounded-pill" />
                                </Form.Group>

                                <div className="d-flex justify-content-center mt-5">
                                    <Button variant="danger" type="submit">Submit</Button>
                                </div>

                            </Form>
                        </div>
                        {/* <Row>
                            <div className='bg-danger-subtle rounded-bottom-4 h-100'>

                                <Button className="client-button w-100 border-0 rounded-0 rounded-bottom-4 fs-4">Tell Us Your Requirement</Button>

                                <Form className='p-5'>

                                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Name*" className="rounded-pill" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                        <Form.Control type="number" placeholder="Mobile No.*" className="rounded-pill" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Address*" className="rounded-pill" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Product / Services*" className="rounded-pill" />
                                    </Form.Group>

                                    <div className="d-flex justify-content-center mt-5">
                                        <Button variant="danger" type="submit">Submit</Button>
                                    </div>

                                </Form>
                            </div>
                        </Row> */}
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Contact;
