import React, { Component } from 'react';
import { Link } from 'react-scroll';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Navigation () {


    return (
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="">FA Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link activeClass="active" smooth duration={500} offset={10} spy to="home">
                  01. Home
                </Link>
                <Link activeClass="active" smooth duration={500} offset={-100} spy to="about">
                  02. About
                </Link>
                <Link activeClass="active" smooth duration={500} offset={-100} spy to="projects">
                  03. Projects
                </Link>
                <Link activeClass="active" smooth duration={500} offset={-100} spy to="contact">
                  04. Contact me
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    )
}