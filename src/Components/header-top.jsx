import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Asset/my-css/navbar.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { SiConsul } from 'react-icons/Si';
import { BsPhone } from 'react-icons/Bs';
import { MdLanguage } from 'react-icons/Md';



const Header = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><span><SiConsul/></span></Navbar.Brand>
       
        
          <Nav className="me-auto ms-auto none">
            <Nav.Link href="#support"><span><BsPhone/> </span>Support</Nav.Link>
            <Nav.Link href="#languages"><span><MdLanguage/> </span>Languages</Nav.Link>
          </Nav>
          <Nav className="cdisplay">
            <Nav.Link href="#sign-in">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#sign-out">
              Sign Out
            </Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  )
}

export default Header;