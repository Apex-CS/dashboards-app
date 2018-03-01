import React, { Component } from 'react';
import {Row, Button, Col} from 'react-materialize'
import adaptable from '../assets/images/cloud-icon.svg';
import flexible from '../assets/images/sourcing-icon.svg';
import digital from '../assets/images/digital-icon.svg';
import '../assets/css/features.css';

class Features extends Component {
    render() {
        return( 
            <div className="features">
                <Row className="container">
                    <Col className="feature_thumbnail" s={12} m={4}>
                       <img src={adaptable}/>
                       <h1>Responsive Design</h1>
                       <p>The application can be easily opened in any device keeping full functionality, technology at your fingertips. Also you should not worry for the browser, It’s compatible with all the recent ones! </p>
                    </Col>
                    <Col className="feature_thumbnail" s={12} m={4}>
                       <img src={flexible}/>
                       <h1>Flexible Data</h1>
                       <p>Different ways to select the data you need, the way is shown, and  get it instantly! You can select by predefined range of values, choose with the data selector, or if you wish you can use the pinch(Mobile)/click(Web) function to zoom the data values range! </p>
                    </Col>
                    <Col className="feature_thumbnail" s={12} m={4}>
                       <img src={digital}/>
                       <h1>Scalability & Control</h1>
                       <p>This application has been built in components with cutting edge techology in order to provide scalability and total control of the application by the owners.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Features;