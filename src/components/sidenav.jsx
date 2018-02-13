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
        console.log(this.props.rangeofValues)

        if(valuesRange === "m3"){
            console.log(valuesRange);
            this.initMonth("February")
        } 
        else if(valuesRange === "m6"){
            console.log(valuesRange);
        }
        else if(valuesRange === "y1"){
            console.log(valuesRange);
        }
    }

    initMonth(initialMonth) {
        this.props.onValueChange(initialMonth,"initMonth");
        console.log(this.props.rangeofValues.initMonth);
    }

    initYear(initialYear) {
        this.props.onValueChange(initialYear,"initYear");
        console.log(this.props.rangeofValues.initYear);
    }
    finalMonth(finalMonth) {
        this.props.onValueChange(finalMonth,"endMonth");
        console.log(this.props.rangeofValues.endMonth);
    }
    finalYear(finalYear) {
        this.props.onValueChange(finalYear,"endYear");
        console.log(this.props.rangeofValues.endYear);
    }

    render() {
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
        const monthOptionList = months.map(month => {
            return <option value={month} key={month}>{month}</option>
        });
        
        const years = [2015,2016,2017];
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
                        
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,"m3")}>3m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,"m6")}>6m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,"y1")}>1y<Icon left>tune</Icon></Button>
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