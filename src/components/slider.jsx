import React, { Component } from 'react';
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize'
import '../assets/css/slider.css';
import { Link } from 'react-router-dom'

import chart_line from '../assets/images/chart_line.PNG'
import chart_bar from '../assets/images/chart_bar.PNG'
import chart_area from '../assets/images/chart_area.PNG'
import chart_gradient from '../assets/images/chart_gradient.PNG'
import chart_dot from '../assets/images/chart_dot.PNG'

class Slider extends Component {
    render() {
    return(
        <div>
            <Row>
                <Col l={4}>
                    <Card 
                        header={<CardTitle reveal image={chart_line} waves='light'/>}
                        title="Line Chart"
                        icon={{name: 'insert_chart'}}
                        reveal = { 
                            <p>
                                A line chart or line graph is a type of chart which displays information as a series of data points 
                                called 'markers' connected by straight line segments.
                                It is a basic type of chart common in many fields.
                            </p>
                        }>
                        <p><a href="/dashboards">Go</a></p>
                    </Card>
                </Col>
                <Col l={4}>
                    <Card 
                        header={<CardTitle reveal image={chart_bar} waves="light" />}
                        title="Bar Chart"
                        reveal = {
                            <p>
                                A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars 
                                with heights or lengths proportional to the values that they represent. The bars can be plotted 
                                vertically or horizontally.
                            </p>
                        }>
                        <p><a href="/dashboards">Go</a></p>
                    </Card>
                </Col>
                <Col l={4}>
                    <Card header={<CardTitle reveal image={chart_dot} waves="light" />}
                        title="Dot Chart"
                        reveal = {
                            <p> 
                                A dot chart or dot plot is a statistical chart consisting of data points plotted 
                                on a fairly simple scale, typically using filled in circles. 
                            </p>
                        }>
                        <p><a href="/dashboards">Go</a></p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col l={4}>
                    <Card 
                        header={<CardTitle reveal image={chart_gradient} waves="light" />}
                        title="Gradient Chart"
                        reveal = {
                            <p>
                                An gradient chart or area graph displays graphically quantitative data. 
                                It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                                textures and hatchings. Commonly one compares with an area chart two or more quantities
                            </p>
                        }>
                    <p><a href="/dashboards">Go</a></p>     
                    </Card>
                </Col>
                <Col l={4}>
                    <Card 
                        header={<CardTitle reveal image={chart_area} waves="light" />}
                        title="Area Chart"
                        reveal = {
                            <p>
                                An area chart or area graph displays graphically quantitative data. 
                                It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                                textures and hatchings. Commonly one compares with an area chart two or more quantities
                            </p>
                        }>
                        <p><a href="/dashboards">Go</a></p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
    }
}

export default Slider;