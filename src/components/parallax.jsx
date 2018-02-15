import React, { Component } from 'react';
import {Parallax, Row, Button, Col} from 'react-materialize'
import '../assets/css/parallax.css';

class MainParallax extends Component {
    render() {
        return( 
            <div>
                <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                <div className="section white">
                    <Row>
                        <Col s={12} m={6} className="parrallax_left">
                            <p className="parallax_header">Lost About Graphics?</p>
                            <p className="parallax_text">Don't worry click on the button to learn more!</p>
                        </Col>
                        <Col s={12} m={6} className="parrallax_right">
                            <Button waves='light' href="" >Learn More</Button>
                        </Col>
                        
                        
                    </Row>
                </div>
                <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
            </div>
        );
    }
}

export default MainParallax;