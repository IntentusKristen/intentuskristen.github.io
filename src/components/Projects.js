import { Col, Container, Row } from "react-bootstrap";

export const Projects = () => {
    
    // create an array that will hold objects with our project information
    const projects = [
        {
            title: "Project 1",
            description: "This is the description for project 1",
            imgURL: progImg1,
        },
        {
            title: "Project 2",
            description: "This is the description for project 2",
            imgURL: progImg2,
        },
        {
            title: "Project 3",
            description: "This is the description for project 3",
            imgURL: progImg3,
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Write a description</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}