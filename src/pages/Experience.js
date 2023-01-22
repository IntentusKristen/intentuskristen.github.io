import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MyTimeline } from '../components/MyTimeline'

const Experience = () => {
    const padStyle = 
            {
                paddingTop: "150px",
            }

  return (
    <div className='App' style={padStyle}>
    <section className='experience'>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col>
                    <h2 style={{color: 'black'}}>Work Experience</h2>
                    <MyTimeline/>
                
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>

            </Row>
        </Container>
    </section>
    
    </div>
  )
}

export default Experience
