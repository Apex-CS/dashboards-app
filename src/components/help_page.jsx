import React          from 'react';
import {Component}    from 'react';
import {Row, Col}     from 'react-materialize'
import {Link}         from 'react-router-dom'
import chart_line     from '../assets/images/chart_line.PNG'
import chart_bar      from '../assets/images/chart_bar.PNG'
import chart_area     from '../assets/images/chart_area.PNG'
import chart_gradient from '../assets/images/chart_gradient.PNG'
import chart_dot      from '../assets/images/chart_dot.PNG'
import '../assets/css/help_page.css';

class Help_Page extends Component {
    /*constructor(props) {
        super(props);
        this.chartSelectorHandler = this.chartSelectorHandler.bind(this);
    }

    chartSelectorHandler(e,chartType) {
        e.preventDefault();
        this.props.onChartTypeChange(chartType);
    }*/

    linkDashboard = {
        link: '/dashboards',
        text: 'View dashboard'
    }

    render() {
    return(
        
    <div className="">
        <Row>
            <Col s={12} m={6} l={4}>
                <div className="cardIntersys">
                    <img src={chart_line} alt="Chart Line" />
                    <div className="container_help">
                        <h5>Chart Line</h5>
                        <p>A line chart or line graph is a type of chart which displays information as a series of data points 
                            called 'markers' connected by straight line segments.
                            It is a basic type of chart common in many fields.</p>
                    </div>
                    <a href={this.linkDashboard.link} className="btnIntersys btn_help">{this.linkDashboard.text}</a>
                </div>
            </Col>
            <Col s={12} m={6} l={4}>
                <div className="cardIntersys">
                    <img src={chart_bar} alt="Chart Bar" />
                    <div className="container_help">
                        <h5>Chart Bar</h5>
                        <p>A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars 
                            with heights or lengths proportional to the values that they represent. The bars can be plotted 
                            vertically or horizontally.</p>
                    </div>
                    <a href={this.linkDashboard.link} className="btnIntersys btn_help">{this.linkDashboard.text}</a>
                </div>
            </Col>
            <Col s={12} m={6} l={4}>
                <div className="cardIntersys">
                    <img src={chart_dot} alt="Chart Dot" />
                    <div className="container_help">
                        <h5>Chart Dot</h5>
                        <p>A dot chart or dot plot is a statistical chart consisting of data points plotted 
                            on a fairly simple scale, typically using filled in circles.</p>
                    </div>
                    <a href={this.linkDashboard.link} className="btnIntersys btn_help">{this.linkDashboard.text}</a> 
                </div>
            </Col>
        </Row>

        <Row>
            <Col s={12} m={6} l={4}>
                <div className="cardIntersys">
                    <img src={chart_gradient} alt="Chart Gradient" />
                    <div className="container_help">
                        <h5>Chart Gradient</h5>
                        <p> An gradient chart or area graph displays graphically quantitative data. 
                            It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                            textures and hatchings. Commonly one compares with an area chart two or more quantities</p>
                    </div>
                    <a href={this.linkDashboard.link} className="btnIntersys btn_help">{this.linkDashboard.text}</a>
                </div>
            </Col>
            <Col s={12} m={6} l={4}>
                <div className="cardIntersys">
                    <img src={chart_area} alt="Chart Area" />
                    <div className="container_help">
                        <h5>Chart Area</h5>
                        <p>An area chart or area graph displays graphically quantitative data. 
                            It is based on the line chart. The area between axis and line are commonly emphasized with colors, 
                            textures and hatchings. Commonly one compares with an area chart two or more quantities</p>
                    </div>
                    <a href={this.linkDashboard.link} className="btnIntersys btn_help">{this.linkDashboard.text}</a> 
                </div>
            </Col>
        </Row>
    </div>
    );
    }
}

export default Help_Page;
