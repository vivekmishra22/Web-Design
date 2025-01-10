import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../Assets/Images/logoipsum-331 1.svg'
// import '../Assets/Css/Navbar.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" bg="danger" className='px-4 py-1'>
        <Navbar.Brand href="#home">
        <Image className='w-50' src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='text-light text-decoration-underline' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#link">About Us</Nav.Link>
            <Nav.Link className='text-light' href="#link">Our Product</Nav.Link>
            <Nav.Link className='text-light' href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      {/* <Navbar bg="danger" data-bs-theme="dark" className='px-4 py-1'>
        <Navbar.Brand href="#home">
          <Image className='w-50' src={Logo} />
        </Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link className='text-light text-decoration-underline' href="#home">Home</Nav.Link>
          <Nav.Link className='text-light' href="#features">About Us</Nav.Link>
          <Nav.Link className='text-light' href="#pricing">Our Product</Nav.Link>
          <Nav.Link className='text-light' href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Navbar> */}
    </>
  )
}

export default MyNavbar;
