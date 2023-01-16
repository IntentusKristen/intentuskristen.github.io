import { Col, Container, Nav, Row, Tab, TabContainer, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import projImg1 from "../assets/img/proj-img1.webp";
//import projImg2 from "../assets/img/proj-img2.webp";
//import projImg3 from "../assets/img/proj-img3.webp";

export const Projects = () => {
    
    // create an array that will hold objects with our project information
    const projects = [
        {
            title: "Project 1",
            description: "This is the description for project 1",
            //imgURL: projImg1,
        },
        {
            title: "Project 2",
            description: "This is the description for project 2",
            //imgURL: projImg2,
        },
        {
            title: "Project 3",
            description: "This is the description for project 3",
            //imgURL: projImg3,
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Write a description</p>
                        <TabContainer id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Fill this in later</Tab.Pane>
                                <Tab.Pane eventKey="third">Fill this in later</Tab.Pane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}