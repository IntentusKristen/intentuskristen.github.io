import React from 'react'
import {Container, Row, Col, Nav} from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
  return (
    <section className='footer'>
      <Container>
      <Row>
        <Col>
          <Nav className="me-auto d-flex justify-content-center 6">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/aboutme" >About Me</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Col>
      </Row>
      <Row>
        <div className="footer-icon d-flex justify-content-center">
          <a href="https://www.facebook.com/kristen.zhang.9655/" target="_blank" ><span style={{width: '59.25%'}}><FacebookIcon sx={{color: 'white'}}/></span></a>
          <a href="https://www.linkedin.com/in/kristen-zhang/" target="_blank"><span><LinkedInIcon sx={{color: 'white'}}/></span></a>
          <a href="https://github.com/IntentusKristen" target="_blank"><span style={{width: '59.25%'}}><GitHubIcon sx={{color: 'white'}}/></span></a>
        </div>
      </Row>
      <Row>
        <p className='d-flex justify-content-center'>Made with ♥ by Kristen Zhang</p>
      </Row>
      </Container>
    </section>

  )
}
