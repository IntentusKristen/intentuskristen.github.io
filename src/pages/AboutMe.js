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
            <Container className="page-pad">
                <Row className="align-items-top">
                    <Col md={6} className="d-flex justify-content-center">
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="d-flex justify-content-center">
                        <p>insert my picture here</p>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center">
                            <p>Hi and welcome to my website! My name is Kristen Zhang and I am currently in my third year at Western University, pursuing a dual degree in software engineering and business. 
                            I have always loved solving problems since I was young and fell in love with coding in university. My main coding languages are Python, JavaScript, and C, and I have been able to apply these skills in various projects -- you can check them out in the "Projects" tab!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default AboutMe