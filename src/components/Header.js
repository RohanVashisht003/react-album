import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <Navbar bg="secondary" expand="lg">
        <Container>
        <Navbar.Brand href="/">
          <span> Album</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='to-right'>
          <Nav>
            <Nav.Link as={Link } to='/' className='text-color'>Home</Nav.Link>
            <Nav.Link as={Link } to='/add' className='text-color'>Add Album</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;