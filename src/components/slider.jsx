import React, { Component } from 'react';
import {Carousel, Row, Col, Button, Icon, Tag} from 'react-materialize'
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
            <Carousel 
                options={{ fullWidth: true }}>
                <Row className="chart chart-green">
                    <Col l={3} >
                        <img src={chart_line} />
                    </Col>
                    <Col l={8} className="jumbo">
                        <h3>Line Chart</h3>
                        <p>A line chart or line graph is a type of chart which displays information as a series of data points 
                            called 'markers' connected by straight line segments.
                            It is a basic type of chart common in many fields.
                        </p>
                    </Col>
                </Row>

                <Row className="chart chart-blue">
                    <Col l={3}>
                    <img src={chart_bar} />
                    </Col>
                    <Col l={8}>
                        <h3>Bar Chart</h3>
                        <p>A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars 
                            with heights or lengths proportional to the values that they represent. The bars can be plotted 
                            vertically or horizontally.</p>
                    </Col>
                </Row>

                <Row className="chart chart-green">
                    <Col l={3}>
                    <img src={chart_area} />
                    </Col>
                    <Col l={7}>
                        <h3>Area Chart</h3>
                        <p>
                            An area chart or area graph displays graphically quantitative data. 
                            It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                            textures and hatchings. Commonly one compares with an area chart two or more quantities.</p>
                    </Col>
                </Row>

                <Row className="chart chart-blue">
                    <Col l={3}>
                    <img src={chart_gradient} />
                    </Col>
                    <Col l={7} className="jumbo">
                        <h3>Gradient Chart</h3>
                        <p>
                            An area chart or area graph displays graphically quantitative data. 
                            It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                            textures and hatchings. Commonly one compares with an area chart two or more quantities.</p>
                    </Col>
                </Row>

                <Row className="chart chart-green">
                    <Col l={3}>
                    <img src={chart_dot} />
                    </Col>
                    <Col l={7} className="jumbo">
                        <h3>Dot Chart</h3>
                        <p>
                            A dot chart or dot plot is a statistical chart consisting of data points plotted on a fairly simple scale, typically using filled in circles. 
                        </p>
                    </Col>
                </Row>
            </Carousel>
            <Link to='/chart' waves='light' className='btn center'>view details<Icon left>timeline</Icon></Link>
        </div>
    );
    }
}

export default Slider;