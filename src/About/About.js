import React from 'react'
import './About.css'
import img1 from '../images/images.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const About = () => {
    return (
        <div>
            <Container>
            <div className='about-pg'>
                <img className='abt-img'/>
            <div className='about-head'>

                About Us
            </div>
                <div className='about-txt'>
                We believe the best way deliver a great user experience is by deeply understanding what people want and love. Then deliver the features, messages, and content that are most helpful, relevant and timely. That's what makes users happy and loyal. Kissmetrics strives to deliver the tools and support that helps companies deliver that great experience. We want our customers customers to be happy, so then our customers are happy and that makes us happy.
                </div>

            </div>
            </Container>
        </div>
    )
}
