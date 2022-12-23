import React from 'react'
import { NavBarAbout } from '../components/NavBarAbout'
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.gif";

const AboutMe = () => {
  return (
    <div className="App">
        <NavBarAbout/>
        <section className="aboutme">
            <Container className="contact-pad">
                <Row className="align-items-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img className="contact-img" src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center">
                            <h2>Send Me a Message!</h2>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default AboutMe