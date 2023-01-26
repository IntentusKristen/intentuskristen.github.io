// need to import functionalities
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect, useDeferredValue } from "react";
import logo from '../assets/img/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

// () basically placeholder for function()
const NavBar = () => {
    const activeLink = window.location.href;
    console.log('pathname is' + window.location.href)
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
              <Nav.Link href="/" exact className={activeLink === 'http://localhost:3000/' ? 'active navbar-link': 'navbar-link'}>Home</Nav.Link>
              <Nav.Link href="/#/aboutme" exact className={activeLink === 'http://localhost:3000/#/aboutme' ? 'active navbar-link': 'navbar-link'}>About Me</Nav.Link>
              <Nav.Link href="/#/experience" exact className={activeLink === 'http://localhost:3000/#/experience' ? 'active navbar-link': 'navbar-link'}>Experience</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="https://www.facebook.com/kristen.zhang.9655/" target="_blank" ><span style={{width: '59.25%'}}><FacebookIcon sx={{color: 'white'}}/></span></a>
                  <a href="https://www.linkedin.com/in/kristen-zhang/" target="_blank"><span><LinkedInIcon sx={{color: 'white'}}/></span></a>
                  <a href="https://github.com/IntentusKristen" target="_blank"><span style={{width: '59.25%'}}><GitHubIcon sx={{color: 'white'}}/></span></a>
              </div>
                <button className="vvd" onClick={() => window.location.href="/#/contact"}><span>Let's Connect</span> </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;