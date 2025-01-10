import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Homeimage from "../Assets/Images/image.png";
import Image from "react-bootstrap/Image";
// import "../Assets/Css/Navbar.css";
import { HiArrowLongRight } from "react-icons/hi2";

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={5} className="p-0 m-0">
                        <div>
                            <Image src={Homeimage} className="w-100" />
                        </div>
                    </Col>
                    <Col md={7} className="Home-page p-5 m-0 text-light d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-2 fw-semibold">Lorem ipsum</h1>
                            <p>
                                <span className="fw-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and
                            </p>
                            <Button variant="danger">
                                <span>Explore our solution</span>
                                <HiArrowLongRight />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
