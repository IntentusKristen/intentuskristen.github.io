// need to import functionalities
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect, useDeferredValue } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// () basically placeholder for function()
const NavBarHome = () => {
    const activeLink = window.location.pathname;
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


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="/">
            <img class='resize' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" exact className={activeLink === '/' ? 'active navbar-link': 'navbar-link'}>Home</Nav.Link>
              <Nav.Link href="/aboutme" className={activeLink === '/aboutme' ? 'active navbar-link': 'navbar-link'}>About Me</Nav.Link>
              <Nav.Link href="/projects" className={activeLink === '/experience' ? 'active navbar-link': 'navbar-link'}>Experience</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://www.linkedin.com/in/kristen-zhang/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                  <a href="https://www.facebook.com/kristen.zhang.9655" target="_blank"><img src={navIcon2} alt="facebook" /></a>
                  <a href="https://www.instagram.com/intentuskristen/" target="_blank"><img src={navIcon3} alt="instagram" /></a>
              </div>
                <button className="vvd" onClick={() => window.location.href="/contact"}><span>Let's Connect</span> </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBarHome;