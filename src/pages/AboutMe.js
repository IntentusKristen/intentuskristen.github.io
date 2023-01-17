import React from 'react'
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/img/headshot.jpg";

const AboutMe = () => {
    // creating inline styling with react
    const padStyle = 
            {
                paddingTop: "200px",
            }

  return (
    <div className="App">
        <section className="aboutme">
            <Container className="page-pad" style = {padStyle}>
                <Row>
                    <Col md={6} className="d-flex justify-content-center">
                        <img className="headshot" src={headshot} alt="Headshot"/>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-left" style={{textAlign: 'left',}}>
                            <p>👋🏼 - Hi I'm Kristen! <br></br> 
                            📚 - I am currently in my third year at Western University, pursuing a dual degree in software engineering and business. <br></br>
                            💻  - My main coding languages are Python, JavaScript, and C, and I have been able to apply these skills in various projects -- you can check them out in the "Projects" tab!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default AboutMe