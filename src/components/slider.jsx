import React, { Component } from 'react';
import {Carousel, Row, Col, Button} from 'react-materialize'
import '../assets/css/slider.css';

class Slider extends Component {
    render() {
    return(
        <Carousel options={{ fullWidth: true }}>
            <Row className="chart chart-green">
                <Col l={3}>
                    <img src='https://cdn-images-1.medium.com/max/1600/1*3L_OB5rwF7af1EpvR5kQIQ.png' />
                </Col>
                <Col l={7}>
                    <h3>Line Chart</h3>
                    <p>A line chart or line graph is a type of chart which displays information as a series of data points 
                        called 'markers' connected by straight line segments.
                        It is a basic type of chart common in many fields.
                    </p>
                </Col>
            </Row>

            <Row className="chart chart-blue">
                <Col l={3}>
                    <img src="https://www.snapsurveys.com/wp-content/uploads/2012/10/bar_2d8.png" />
                </Col>
                <Col l={7}>
                    <h3>Bar Chart</h3>
                    <p>A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars 
                        with heights or lengths proportional to the values that they represent. The bars can be plotted 
                        vertically or horizontally.</p>
                </Col>
            </Row>

            <Row className="chart chart-green">
                <Col l={3}>
                    <img src="https://www.qimacros.com/excel-charts-qimacros/stacked-area-chart-excel.jpg" />
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
                    <img src="https://www.telerik.com/clientsfiles/61170d23-bbe4-4221-a15c-f1e2b13358b3_screen.png?sfvrsn=2bf34fb1_0" />
                </Col>
                <Col l={7}>
                    <h3>Gradient Chart</h3>
                    <p>
                        An area chart or area graph displays graphically quantitative data. 
                        It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                        textures and hatchings. Commonly one compares with an area chart two or more quantities.</p>
                </Col>
            </Row>

            <Row className="chart chart-green">
                <Col l={3}>
                    <img src="https://peltiertech.com/images/2016-01/ScatterDotPlot.png" />
                </Col>
                <Col l={7}>
                    <h3>Dot Chart</h3>
                    <p>
                        A dot chart or dot plot is a statistical chart consisting of data points plotted on a fairly simple scale, typically using filled in circles. 
                    </p>
                </Col>
            </Row>

        </Carousel>
    );
    }
}

export default Slider;