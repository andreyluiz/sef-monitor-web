import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">SEF Monitor</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
