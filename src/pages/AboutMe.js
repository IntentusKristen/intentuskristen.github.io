import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/img/headshot.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import resume from "../assets/img/resume.pdf"

const AboutMe = () => {
    // creating inline styling with react
    const padStyle = 
            {
                paddingTop: "250px",
            }

  return (
    <div className="App">
        <section className="aboutme">
            <Container style={padStyle}>
                <Row>
                    <Col md={6} className="d-flex justify-content-center">
                        <img className="headshot" src={headshot} alt="Headshot"/>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-left" style={{textAlign: 'left',}}>
                            <p>👋🏼 - Hi I'm Kristen! <br></br> <br></br> 
                            📚 - I am currently in my third year at Western University, pursuing a dual degree in software engineering and business. <br></br> <br></br> 
                            👩🏻‍💻  - My main coding languages are Python and JavaScript.</p>
                            
                        </div>
                        <button onClick={() => window.open(resume,"_blank")}>Check out my resume here<ArrowRightCircle size={25}/></button>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default AboutMe