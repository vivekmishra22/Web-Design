import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaPhone, FaAngleRight } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import FooterIcon from "../Assets/Images/logoipsum-331 1 (1).svg";
import FooterImage from "../Assets/Images/image (10).png";

const Footer = () => {
  return (
    <>
      <Container fluid className="p-0">
        <div className="border border-5 border-danger border-top"></div>
        <Row className="bg-dark p-4">
          <Col md={4} className="p-5">
            <Row>
              <Col md={12}>
                <h6 className="text-danger">CONTACT US</h6>
                <div>
                  <FaPhone className="text-danger me-1" />
                  <span className="text-light">+91  324324324324</span>
                </div>
                <div>
                  <TfiEmail className="text-danger me-1" />
                  <span className="text-light">sales@ghghdssdsd.com</span>
                </div>
                <div>
                  <GrMapLocation className="text-danger me-1" />
                  <span className="text-light">anb,tyrehw,nvdkvd,ddfdfd</span>
                </div>
              </Col>
            </Row>

            <Row className="p-4">
              <Col md={12}>
                <h5 className="text-light">Follow on us</h5>
                <div className="text-danger fs-4 d-flex align-items-center">
                  <FaFacebook className="m-2" />
                  <FaYoutube className="m-2" />
                  <FaLinkedin className="m-2" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="p-5">
            <h6 className="text-danger">QUICK LINKS</h6>
            <div>
              <FaAngleRight className="text-danger me-1" />
              <span className="text-light">Home</span>
            </div>
            <div>
              <FaAngleRight className="text-danger me-1" />
              <span className="text-light">About</span>
            </div>
            <div>
              <FaAngleRight className="text-danger me-1" />
              <span className="text-light">Product</span>
            </div>
            <div>
              <FaAngleRight className="text-danger me-1" />
              <span className="text-light">Services</span>
            </div>
            <div>
              <FaAngleRight className="text-danger me-1" />
              <span className="text-light">Contact us</span>
            </div>
          </Col>

          <Col md={5} className="">
            <div className="d-flex justify-content-center mb-2">
              <Image src={FooterIcon} />
            </div>
            <p className="text-light fs-5">
              <span className="fw-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="d-flex justify-content-center">
              <Image src={FooterImage} className="w-50" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
