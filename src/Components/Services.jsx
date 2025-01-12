import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ServicesImage from "../Assets/Images/sercive-image.png";
import ServicesImage1 from "../Assets/Images/image 459.png";
import ServicesIcon1 from "../Assets/Images/Mask group.svg";
import ServicesIcon2 from "../Assets/Images/Mask group (1).svg";
import ServicesIcon3 from "../Assets/Images/Mask group (2).svg";
// import ServicesImage1 from "../Assets/Images/Group 1000004948.png";
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineSettings, MdVideoSettings } from "react-icons/md";
import { GiElectric } from "react-icons/gi";

const Services = () => {
    return (
        <>
            <Container fluid>

                <Row className="p-2">
                    <h3 className="text-danger fw-bold">Product</h3>
                </Row>

                <Row className="position-relative">
                    <div className="m-0 p-0 position-relative">
                        <Image src={ServicesImage} className="w-100" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 p-5 d-flex align-items-center justify-content-center gap-5">
                            {/* opacity-25   bg-primary d-flex justify-content-center align-items-center*/}
                            {/* Icon 1 */}
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-danger rounded-circle"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <BiSolidHome className="text-light display-5" />
                                </div>
                                <span className="text-light text-center">Lorem Ipsum</span>
                            </div>
                            {/* Icon 2 */}
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-danger rounded-circle"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <MdOutlineSettings className="text-light display-5" />
                                </div>
                                <span className="text-light">Lorem Ipsum</span>
                            </div>
                            {/* Icon 3 */}
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-danger rounded-circle"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <GiElectric className="text-light display-5" />
                                </div>
                                <span className="text-light">Lorem Ipsum</span>
                            </div>
                            {/* Icon 4 */}
                            <div className="d-flex flex-column align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-danger rounded-circle"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <MdVideoSettings className="text-light display-5" />
                                </div>
                                <span className="text-light mt-1">Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Row className="p-4">
                        <h3 className="text-danger fw-bold">why we choose</h3>
                    </Row>
                    <Col md={5}>
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
                        <div>
                            <div>
                            <Image src={ServicesIcon1} className="" />
                            <span>Our Projects</span>
                            <span></span>
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div>
                            <Image src={ServicesImage1} className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;
