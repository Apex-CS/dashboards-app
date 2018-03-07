import React, { Component } from 'react';
import {Row, Col} from 'react-materialize'
import '../../assets/css/stack.css';

import react from '../../assets/images/technology_stack/react.svg';

export default class TechStack extends Component {
    render() {
        return( 
            <div className="stack_container">
                <Row className="container">
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    <Col className="feature_thumbnail" s={1}>
                       <img src={react}/>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}