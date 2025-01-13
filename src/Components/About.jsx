import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import AboutImage from "../Assets/Images/image (1).png";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
    return (
        <>
            <Container fluid className="py-5 px-4">
                <Row className="p-2">
                    <h3 className="text-danger fw-bold">About Us</h3>
                    <p className="text-primary-emphasis display-6 fw-medium">Lorem Ipsum is simply dummy</p>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image src={AboutImage} className="w-100" />
                    </Col>

                    <Col md={6} className="p-5">
                        <p>
                            <span className="fw-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.s simply
                            dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to
                            make a type
                        </p>
                        <div className="fw-bold">
                            <div>
                                <GoDotFill className="text-danger" />
                                <span>Lorem Ipsum </span>
                            </div>
                            <div>
                                <GoDotFill className="text-danger" />
                                <span>Lorem Ipsum </span>
                            </div>
                            <div>
                                <GoDotFill className="text-danger" />
                                <span>Lorem Ipsum </span>
                            </div>
                            <div>
                                <GoDotFill className="text-danger" />
                                <span>Lorem Ipsum </span>
                            </div>
                        </div>
                        <Button variant="danger" className="mt-4 py-0 px-2">
                            <span className="fs-6">Learn more</span>
                            <HiArrowLongRight className="fs-4" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;
