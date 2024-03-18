import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/img/headshot.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import resume from "../assets/img/resume.pdf"

const AboutMe = () => {
    // creating inline styling with react
    const padStyle = 
            {
                paddingTop: "200px",
                paddingBottom: "50px"
            }

  return (
    <div className="App">
        <section className="aboutme">
            <Container style={padStyle}>
                <Row className="d-flex justify-content-center">
                <Col md={1}></Col>
                    <Col md={5} className="d-flex justify-content-center align-items-center">
                        <img className="headshot" src={headshot} alt="Headshot"/>
                    </Col>
                    <Col md={5}>
                    <h1 style={{textAlign: 'left',}}><b>Hello 🤍</b></h1>
                        <div className="d-flex justify-content-left" style={{textAlign: 'left'}}>
                            
                            <p>👋🏼 - I'm Kristen! <br></br>
                            📚 - I am currently at Western University, pursuing a dual degree in software engineering and business.<br></br> 
                            👩🏻‍💻 - I've done a variety of work ranging from full-stack, research, production engineering and more! <br></br>
                            🌟 - In my free time, I love going on food adventures, playing TFT, and travelling. <br></br><br></br>
                            Thanks for stopping by my website! 
                            </p>
                         
                        </div>
                        <button onClick={() => window.open(resume,"_blank")}>Check out my resume here<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default AboutMe