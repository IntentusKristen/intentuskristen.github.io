import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14xbwcj', 'template_5a1xr1c', form.current, 'ateXVpgMvpy00NNsT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='App'>
    <section className="contact" id="connect">
        <Container className="page-pad">
            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center">
                    <img className="contact-img" src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-center">
                        <h2>Send Me a Message!</h2>
                    </div>
                    
                    <form onSubmit={sendForm}>
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
  );
};

export default Contact