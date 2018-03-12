import React, { Component } from 'react';
import {Row, Col} from 'react-materialize'
import '../../assets/css/stack.css';

import css3 from '../../assets/images/technology_stack/css3.svg';
import github from '../../assets/images/technology_stack/github.png';
import hammerJS from '../../assets/images/technology_stack/hammerJS.jpg';
import html5 from '../../assets/images/technology_stack/html5.png';
import js from '../../assets/images/technology_stack/js.png';
import materialize from '../../assets/images/technology_stack/materialize.png';
import prime_react from '../../assets/images/technology_stack/prime_react.png';
import react from '../../assets/images/technology_stack/react.png';
import react_vis from '../../assets/images/technology_stack/react_vis.JPG';
import react_d3 from '../../assets/images/technology_stack/react_D3.png';

export default class TechStack extends Component {
    render() {
        return( 
            <Row className="stack_container">
                <div className="container">
                    <h1>Powered by</h1>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://reactjs.org/"><img src={react} /></a>
                    </Col>
                    <Col className="stack_thumbnail">
                       <a target="_blank" href="https://react-materialize.github.io/#/"><img src={materialize} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://uber.github.io/react-vis/"><img src={react_vis} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="http://www.reactd3.org/"><img src={react_d3} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                    <a target="_blank" href="https://hammerjs.github.io/"><img src={hammerJS} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://www.primefaces.org/primereact/"><img src={prime_react} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://github.com/"><img src={github} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://www.w3.org/TR/html5/"><img src={html5} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://www.w3.org/Style/CSS/"><img src={css3} /></a>
                    </Col>
                    <Col className="stack_thumbnail" >
                       <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src={js} /></a>
                    </Col>
                </div>
                    
            </Row>
        );
    }
}