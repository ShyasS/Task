import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='col-sm-1'>Hospital <br /> Management System</Navbar.Brand>
          <Navbar.Toggle className=' row align-sm-end col-lg' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-5 mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Products</Nav.Link>
              <Nav.Link href="#pricing">Mobile Apps</Nav.Link>
              <Nav.Link href="#Integrations">Services</Nav.Link>
              <Nav.Link href="#Resources">Blog</Nav.Link>
              <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
            </Nav>
            <Stack direction="horizontal" gap={3}>
              <Button variant="outline-success" className='ms-4' style={{ borderRadius: '30px', width: '100px' }} >Demo</Button>
              <Form className="d-flex ">
                <Button variant="success" style={{ borderRadius: '30px', width: '100px' }} >Free trail</Button>
              </Form>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header