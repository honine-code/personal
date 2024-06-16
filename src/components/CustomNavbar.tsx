import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';

const CustomNavbar: React.FC = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ScrollLink to="home" smooth={true} duration={500} className="nav-link">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
              About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="nav-link">
              Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="nav-link">
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default CustomNavbar;
