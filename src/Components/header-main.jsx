import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "../Asset/my-css/navbar.css";


const headermain = () => {
  return (
    <header className="sticky-top">
      <Navbar className="headernav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FLY HIGH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-5 ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#offers">Offers</Nav.Link>
              <Nav.Link href="#seat">Seats</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link className="header-contact me-4 ms-5" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    
  )
}

export default headermain;