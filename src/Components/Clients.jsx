import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import ClientImage1 from "../Assets/Images/image (6).png";
import ClientImage2 from "../Assets/Images/image (7).png";
import ClientImage3 from "../Assets/Images/image (8).png";
import ClientImage4 from "../Assets/Images/image (9).png";

const Clients = () => {
  return (
    <>
      <Container fluid className='bg-danger-subtle p-5'>
        <Row className="px-4">
          <h3 className="text-danger fw-bold">Our client</h3>
        </Row>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col md={8} className='d-flex align-items-center justify-content-center gap-5 px-5'>
              <Col md={3}>
                <Image src={ClientImage1} className="w-100" />
              </Col>
              <Col md={3}>
                <Image src={ClientImage2} className="w-100" />
              </Col>
              <Col md={3}>
                <Image src={ClientImage3} className="w-100" />
              </Col>
              <Col md={3}>
                <Image src={ClientImage4} className="w-100" />
              </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Clients;
