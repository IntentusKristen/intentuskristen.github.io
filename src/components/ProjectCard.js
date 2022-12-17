import { Col } from "react-bootstrap"

// takes in arguments 
export const ProjectCard = ({ title, description, imgURL }) => {
    return(
        // on average three cards per row
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}