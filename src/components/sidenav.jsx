import React, { Component } from 'react';
import {
    Row, 
    Input, 
    Button, 
    Col,
    Icon,
    Dropdown,
    NavItem,
    Collapsible,
    CollapsibleItem
} from 'react-materialize'
import logo from '../assets/images/intersys-small.svg';
import '../assets/css/sidenav.css';
import { MONTHS } from '../assets/theme'

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const years = [2015,2016,2017];
export default class SideMenu extends Component {
        
    constructor(props) {
        super(props);
        this.chartSelectorHandler = this.chartSelectorHandler.bind(this);
        this.rangeButtonsHandler = this.rangeButtonsHandler.bind(this);
    }

    chartSelectorHandler(e,chartType) {
        e.preventDefault();
        this.props.onChartTypeChange(chartType);
    }
    
    rangeButtonsHandler(e,valuesRange) {
        e.preventDefault();
        let init_month = currentMonth - valuesRange;
        let end_month = currentMonth -1;
        let init_year = currentYear;
        let end_year = currentYear;
        
        if(init_month < 0){
            init_year --;
            init_month = 12 + init_month;                
        }
        this.props.onValueChange(months[init_month],"initMonth");
        this.props.onValueChange(init_year,"initYear");     

        if(end_month < 0){
            end_year --;
            end_month = 12 + init_month;
        }
        this.props.onValueChange(months[end_month],"endMonth");
        this.props.onValueChange(end_year,"endYear");     

    }

    initMonth(initialMonth) {
        this.props.onValueChange(initialMonth,"initMonth");
    }

    initYear(initialYear) {
        this.props.onValueChange(months,"initYear");
    }
    finalMonth(finalMonth) {
        this.props.onValueChange(finalMonth,"endMonth");
    }
    finalYear(finalYear) {
        this.props.onValueChange(finalYear,"endYear");
    }

    render() {
        const monthOptionList = months.map(month => {
            return <option value={month} key={month}>{month}</option>
        });
        
        const yearsOptionList = years.map(year => {
            return <option value={year} key={year}>{year}</option>
        });

        const chart_types = ['line', 'bar', 'area','gradient', 'dot'];
        const chartOptionList = chart_types.map(chartType => {
            return <NavItem 
            value={chartType}
            key={chartType}
            onClick={ e => this.chartSelectorHandler(e,chartType) }
            >{chartType} chart</NavItem>
        });
    
        return( 
            <Row className="sideMenu">
                <Col s={12} ><h1>Data Values</h1></Col>
                    <Row>
                        <Col s={12}>
                            <h2>Range of Values</h2>
                        </Col>
                    </Row>
                    <Row className="buttonsRange">
                        
                        <Col s={12}>
                            <h6 s={12} l={6} className="rangeValues">Initial</h6>
                        </Col>
                        <Input s={6}  className="selector" type='select' label="Month" onChange={ e => this.initMonth(e.target.value)}>{monthOptionList}</Input>
                        <Input s={6} type='select' label="Year" onChange={ e => this.initYear(e.target.value)}>{yearsOptionList}</Input>

                        <Col s={12}>
                            <h6 s={12} l={6} className="rangeValues">Final</h6>
                        </Col>
                        <Input s={6} className="selector" type='select' label="Month" onChange={ e => this.finalMonth(e.target.value)}>{monthOptionList}</Input>
                        <Input s={6} type='select' label="Year" onChange={ e => this.finalYear(e.target.value)}>{yearsOptionList}</Input>
                        
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,3)}>3m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,6)}>6m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,12)}>1y<Icon left>tune</Icon></Button>
                    </Row>
                    <Row className="chartType">
                        <Col s={12}>
                            <h2>Type of Chart</h2>
                        </Col>
                        <Dropdown s={12} trigger={<Button>Select the type of chart!</Button>}>{chartOptionList}</Dropdown>
                    </Row>
            </Row>   
        );
    }
}