import React, { Component } from 'react';
import {Parallax, Row, Button, Col} from 'react-materialize'
import '../assets/css/pitch.css';
import MDC1 from '../assets/images/MDC-1.JPG';
import MDC2 from '../assets/images/MDC-2.JPG';
import mobile from '../assets/images/mobile.png';

class PitchHeader extends Component {
    render() {
        return( 
            <div>
                {/*<Parallax imageSrc={MDC1}/>*/}
                <Row className="section inside_parallax">
                    <Col s={12} m={7} className="parrallax_left">
                        <div className="container pitch_container">
                            <p className="parallax_header">Introducing your new personal <span>Assistant</span> at work</p>
                            <p className="parallax_text">This application provides an easy way to chart your data in all your devices.</p>
                            <div className="pitch_buttons">
                                <Button className="demo_button" node='a' waves='light' href='www.intersysconsulting.com'>Get In Touch</Button>
                                <Button className="learn_button"  node='a' waves='light' href='/dashboards'>Live Demo</Button>
                            </div>
                        </div>
                    </Col>
                    <Col s={12} m={5} className="parrallax_right">
                        <img className="mobile_landing" src={mobile} />
                    </Col>
                </Row>
                {/* <Parallax imageSrc={MDC2}/> */}
            </div>
        );
    }
}

export default PitchHeader;
