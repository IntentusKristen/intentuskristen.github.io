import React from 'react'
import {Container, Row, Col, Nav} from 'react-bootstrap'

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
        <p className='d-flex justify-content-center'>Made with ♥ by Kristen Zhang</p>
      </Row>
      </Container>
    </section>

  )
}
