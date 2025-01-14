import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ContactImage from "../Assets/Images/image 469.png";
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [product, setProduct] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            name,
            mobile,
            address,
            product,
        };

        axios
            .post("http://localhost:8000/postuser", userData)
            .then((res) => {
                console.log("hi", res.data);
                alert("Submitted Successfully!!");
                setName("");
                setMobile("");
                setAddress("");
                setProduct("");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Container fluid className="p-5">
                <Row>
                    <Col md={8}></Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <h3 className="text-danger fw-bold">Contact us</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Image src={ContactImage} className="w-100" />
                    </Col>
                    <Col md={4}>
                        <div className="bg-danger-subtle rounded-bottom-4 h-100">
                            <Button className="client-button w-100 border-0 rounded-0 rounded-bottom-4 fs-4">
                                Tell Us Your Requirement
                            </Button>

                            <Form className="p-5" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name*"
                                        className="rounded-pill"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control
                                        type="number"
                                        placeholder="Mobile No.*"
                                        className="rounded-pill"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Address*"
                                        className="rounded-pill"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Product / Service*"
                                        className="rounded-pill"
                                        value={product}
                                        onChange={(e) => setProduct(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-center mt-5">
                                    <Button variant="danger" type="submit">
                                        Submit
                                    </Button>
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
    );
};

export default Contact;
