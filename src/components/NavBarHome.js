// need to import functionalities
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect, useDeferredValue } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// () basically placeholder for function()
export const NavBarHome = () => {
    const [activeLink, setActiveLink] = useState('home');
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
          <Navbar.Brand href="/home">
            <img class='resize' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" exact className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/aboutme" className={activeLink === 'aboutme' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
              <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span> </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}