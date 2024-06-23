import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleNavClick = (section: string) => {
        if (!isHomePage) {
            navigate(`/#${section}`);
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'auto'
                    });
                }
            }, 100);
        } else {
            const element = document.getElementById(section);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'auto'
                });
            }
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand>My Portfolio</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
