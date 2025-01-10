import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProductImage from "../Assets/Images/image (2).png";
import ProductImage1 from "../Assets/Images/AMF-Panel.png";
import ProductImage2 from "../Assets/Images/image (3).png";
import Image1 from "../Assets/Images/image (5).png";

const Product = () => {
    return (
        <>
            <Container fluid>
                <div className="p-2">
                    <Row className="p-2">
                        <h3 className="text-danger fw-bold">Product</h3>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Image src={ProductImage} className="w-100" />
                            <Button className="client-button w-100 rounded-0 border-0">
                                sales
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Image src={ProductImage1} className="w-100" />
                            <Button className="client-button w-100 rounded-0 border-0">
                                sales
                            </Button>
                        </Col>
                        <Col md={4}>
                            <Image src={ProductImage2} className="w-100 mt-2" />
                            <Button className="client-button w-100 rounded-0 border-0">
                                sales
                            </Button>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <div>
                        <Image src={Image1} className="w-100 mt-2 position-relative" />
                        <div className="position-absolute">
                            <h2>Have any project with us</h2>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Product;
