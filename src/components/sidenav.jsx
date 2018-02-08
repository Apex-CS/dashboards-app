import React, { Component } from 'react';
import { Row, Input, Button, Col, Icon } from 'react-materialize'
import logo from '../assets/images/intersys-small.svg';
import '../assets/css/sidenav.css';
import { MONTHS } from '../assets/theme'

class SideMenu extends Component {

    render() {
        const monthOptionList = MONTHS.map(function(m) {
            return <option value={MONTHS[m]}>{m}</option>
        });

        const years = [2015, 2016, 2017];
        const yearsOptionList = years.map(function(y) {
            return <option value={years[y]}>{y}</option>
        });
        return( 
            <div className="sideMenu">
                <Col s={12} ><h1>Data Values</h1></Col>
                <Row>
                    <Col s={12} ><h2>Zoom</h2></Col>
                    <Input s={12} type='range' min="0" max="100" step="10"  />
                </Row>
                <Row>
                    <Col s={12}>
                        <h2>Range of Values</h2>
                    </Col>
                    <Col s={12}>
                        <h6 s={12} l={6} className="rangeValues">Initial</h6>
                    </Col>
                    <Input s={12} l={6} class="selector" type='select' label="Month">{monthOptionList}</Input>
                    <Input s={12} l={6} type='select' label="Year">{yearsOptionList}</Input>
                </Row>
                <Row>
                    <Col s={12}>
                        <h6 s={12} l={6} className="rangeValues">Final</h6>
                    </Col>
                    <Input s={12} l={6} class="selector" type='select' label="Month">{monthOptionList}</Input>
                    <Input s={12} l={6} type='select' label="Year">{yearsOptionList}</Input>
                </Row>   
            </div>   
        );
    }
}

export default SideMenu;