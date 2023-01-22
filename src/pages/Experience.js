import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MyTimeline } from '../components/MyTimeline'

const Experience = () => {
    const padStyle = 
            {
                paddingTop: "200px",
            }

  return (
    <div className='App' style={padStyle}>
    <section className='experience'>
        <Container>
            <Row>
                <Col>
                <MyTimeline/>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    </section>
    
    </div>
  )
}

export default Experience
