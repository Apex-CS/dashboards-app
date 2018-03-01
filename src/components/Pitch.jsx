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
                            <p className="parallax_header">Enable your team for success with a <span> Custom Rich Dashboard</span>.</p>
                            <p className="parallax_text">Intersys can provide you an easy solution to customize your data presentation for all devices.</p>
                            <div className="pitch_buttons">
                                <Button className="demo_button" node='a' target="_blank" waves='light' href='https://www.intersysconsulting.com'>Get In Touch</Button>
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