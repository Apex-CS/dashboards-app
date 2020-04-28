import React, { Component } from 'react';
import { Row, Button, Col} from 'react-materialize';
import { Link } from 'react-router-dom';
import '../../assets/css/pitch.css';
import mobile from '../../assets/images/mobile.png';

class PitchHeader extends Component {
    
    checkingMode(){
        if(window.location.pathname === '/'){
            return[ 
                <Button className="learn_button" waves='light'><Link to="/dashboards">Live Demo</Link></Button>
            ]
        }
        else {
            return[
                <Button className="learn_button"  node='a' waves='light'><Link to="/adaptive_mode/dashboards">Live Demo</Link></Button> 
            ]    
        }    
    }
    
    render() {
        return( 
            <div>
                <Row className="section inside_parallax">
                    <Col s={12} m={7} className="parrallax_left">
                        <div className="container pitch_container">
                            <p className="parallax_header">Enable your team for success with a <span> Custom Rich Dashboard</span></p>
                            <p className="parallax_text">Apex can provide you an easy solution to customize your data presentation for all devices.</p>
                            <div className="pitch_buttons">
                                <Button className="demo_button" node='a' target="_blank" waves='light' href='https://www.apexsystems.com/'>Get In Touch</Button>
                                {this.checkingMode()}
                            </div>
                        </div>
                    </Col>
                    <Col s={12} m={5} className="parrallax_right">
                        <img className="mobile_landing" src={mobile} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PitchHeader;