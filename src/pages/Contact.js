import React from 'react'
import { NavBarContact } from '../components/NavBarContact'
import { ContactComp } from '../components/ContactComp'

const Contact = () => {
  // declare the initial states
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
}
const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState("Send");
// would be an empty object before user has sent anything
const [status, setStatus] = useState({});

const onFormUpdate = (category, value) => {
    setFormDetails({
        // leaves the rest of the details intact
        ...formDetails,
        [category]: value
    }
    )
}

// create a submit function
const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    // server we are set up will be running on local host 5000
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf8",
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    // set form details back to initial state (empty)
    setFormDetails(formInitialDetails);

    // process response back if successful API call
    if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully'});
    }
    else {
        setFormDetails({success: false, message: "Something went wrong, please try again later."});
    }
}

return(
    <div className='App'>
        <NavBarContact/>
    <section className="contact" id="connect">
        <Container className="contact-pad">
            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center">
                    <img className="contact-img" src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-center">
                        <h2>Send Me a Message!</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1 d-flex justify-content-end">
                                <input className="input-field" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-start">
                                <input className="input-field" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-end">
                                <input className="input-field" type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1 d-flex justify-content-start">
                                <input className="input-field" type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm={12} className="d-flex justify-content-center">
                                <textarea className="message-box" row="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <button className="contact-button" type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger": "success"}></p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
    </div>
)
}

export default Contact