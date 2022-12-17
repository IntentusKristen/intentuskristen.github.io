import { Col, Container, Row } from "react-bootstrap";
//import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.gif";
import { useState, useEffect } from "react";
import { update } from "tar";

export const Banner = () => {
    // loop number indicates index as to which word is currently displayed on the screen
    const [loopNum, setLoopNum ] = useState(0);
    // whether the word being typed out or being deleted, set to false initially because we start by typing the word
    const [isDeleting, setIsDeleting] = useState(false);
    // list of words to display
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    // indicate the portion of the word being displayed
    const [text, setText] = useState("");
    // to determine how fast one letter comes up after the first one is typed
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    // arbitrarily indicate how much time passes between one extra letter being typed out
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]) // we want to run this useEffect everytime the text gets updated

    // define tick function
    const tick = () => {
        let i = loopNum % toRotate.length; // loopNum will continue to increment past 3, so use % to make it a cycle
        let fullText = toRotate[i];
        // one letter less than current number of letters if deleting, else one letter more
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        // update the state of our text
        setText(updatedText)

        // make the speed of deleting faster than if it was typing
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        // check if text needs to start deleting
        if (!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period); // set delta back to its normal pace
        }
        
        // check if text is done deleting and needs to start typing
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Kristen `}<span className="wrap">{text}</span></h1>
                        <p> Write something about yourself here</p>
                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}