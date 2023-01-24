import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { WorkTimeline } from '../components/WorkTimeline'
import { LeadershipTimeline } from '../components/LeadershipTimeline'

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
                <Col sm={2}></Col>
                <Col>
                    <h2 style={{color: 'white'}}><u><b>Work Experience</b></u></h2>
                    <WorkTimeline/>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
            <Row>
            <br></br>
            </Row>
            <Col sm={2}></Col>
                <Col>
                    <h2 style={{color: 'black'}}><u><b>Leadership</b></u></h2>
                    <LeadershipTimeline/>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    </section>
    
    </div>
  )
}

export default Experience
