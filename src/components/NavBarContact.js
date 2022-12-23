// need to import functionalities
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, useDeferredValue } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// () basically placeholder for function()
export const NavBarContact = () => {
    const [activeLink, setActiveLink] = useState('');
    // detect whether user scrolled or not
    const [scrolled, setScrolled] = useState('false')

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled('true');
            } else {
                setScrolled('false');
            }
        }

        window.addEventListener("scroll", onScroll);

        // remove event listeners when you don't plan on using them anymore
        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto contact-nav">
              <Nav.Link href="/" exact className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Back</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}