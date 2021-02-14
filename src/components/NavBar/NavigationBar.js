import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { navBar, navBrand, navLink } from '../customStyle/NavColor'
import Logo from "../../assets/images/whitelogo.png"

function NavigationBar(){

  const customStyle = {
    marginLeft: "130px",
    marginRight: "130px",
  }

  return (
    <div>
       <Navbar variant="dark" style={navBar}>
         <Container>
          <Navbar.Brand style={navBrand} href="/">
            <img style={{width:"135px",height:"30px"}} src={Logo}/>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link style={navLink} href="/">Home</Nav.Link>
            <Nav.Link style={navLink} href="/integration">Integration</Nav.Link>
            <Nav.Link style={navLink} href="/google">Google Api</Nav.Link>
          </Nav>
         </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;