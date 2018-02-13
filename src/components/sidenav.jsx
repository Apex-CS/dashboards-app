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
        console.log(valuesRange, "c");
        this.props.onRangeSelection(valuesRange);
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
        const monthOptionList = months.map(function(month) {
            return <option value={month} key={month}>{month}</option>
        });

        const years = [2015,2016,2017];
        const yearsOptionList = years.map(function(year) {
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
                        <Button s={6} waves='light' value="3m" onClick={e => console.log(e,"m3")}>3m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' value="6m">6m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' value="1y">1y<Icon left>tune</Icon></Button>
                        
                        <Collapsible s={12}>
                            <CollapsibleItem header={<Button s={12} m={6} waves='light'>Other Values<Icon left>tune</Icon></Button>}>
                                <Col s={12}>
                                    <h6 s={12} l={6} className="rangeValues">Initial</h6>
                                </Col>
                                <Input s={6}  className="selector" type='select' label="Month">{monthOptionList}</Input>
                                <Input s={6} type='select' label="Year">{yearsOptionList}</Input>

                                <Col s={12}>
                                    <h6 s={12} l={6} className="rangeValues">Final</h6>
                                </Col>
                                <Input s={6} className="selector" type='select' label="Month">{monthOptionList}</Input>
                                <Input s={6} type='select' label="Year">{yearsOptionList}</Input>
                            </CollapsibleItem>
                        </Collapsible>
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