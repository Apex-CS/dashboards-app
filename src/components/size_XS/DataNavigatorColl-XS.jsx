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
import logo from '../../assets/images/intersys-small.svg';
import '../../assets/css/dataNavigatorColl.css';
import { MONTHS } from '../../assets/theme'

//const currentMonth = new Date().getMonth();
const currentMonth = 1;
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

const yearsInit= [2017,2018,2019];
const yearsEnd= [2017,2018,2019,2020];
/*

//To Validate values 3 years back (exactly 3 years available)
var years = [];
var maxValue=3;
if(currentMonth===11)
    maxValue=2;

for (maxValue; maxValue>=0; maxValue--) {
    years.push(currentYear-maxValue);
}
//End of validation 

*/

export default class XS_CollapsibleMenu extends Component {
        
    constructor(props) {
        super(props);
        this.dashboardSelectorHandler = this.dashboardSelectorHandler.bind(this);
        this.rangeButtonsHandler = this.rangeButtonsHandler.bind(this);
    }

    dashboardSelectorHandler(e,dashboardType) {
        e.preventDefault();
        this.props.onDashboardTypeChange(dashboardType);
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
        this.props.onValueChange(parseInt(init_year),"initYear");     

        if(end_month < 0){
            end_year --;
            end_month = 12 + init_month;
        }
        this.props.onValueChange(months[end_month],"endMonth");
        this.props.onValueChange(parseInt(end_year),"endYear");     
    }
    
    chartsSelectionHandler(e,type, value) {
        this.props.showChart(type, value)
    }

    initMonth(initialMonth) {
        this.props.onValueChange(initialMonth,"initMonth");
    }

    initYear(initialYear) {
        const { rangeofValues, onValueChange } = this.props;
        
        (initialYear > rangeofValues.endYear) ?
            window.Materialize.toast("Please Select a valid range, Initial year cannot be higher than final", 3000)
        : onValueChange(parseInt(initialYear),"initYear");
        
    }
    finalMonth(finalMonth) {
        this.props.onValueChange(finalMonth,"endMonth");
    }
    finalYear(finalYear) {
        this.props.onValueChange(parseInt(finalYear),"endYear");
    }

    render() {
        const initialMonthList = months.map((month) => {
            return <option value={month} key={month} >{month}</option>
        });

        const endMonthList = months.map((month,index) => {
            let enable_disable = true;
            
            if(this.props.rangeofValues.endYear < this.props.rangeofValues.initYear) {
                enable_disable = false;
            }
            else {
                if(this.props.rangeofValues.endYear === currentYear){
                    if(index >= currentMonth) {
                        enable_disable = false;
                    }
                }     
                else {
                    if(this.props.rangeofValues.initYear === this.props.rangeofValues.endYear){
                        if(index <= months.indexOf(this.props.rangeofValues.initMonth))
                            enable_disable = false;
                    }
                }
            }
            
            if(enable_disable === true) {
                return <option value={month} key={month} >{month}</option>
            }
            else{
                return <option value={month} key={month} disabled>{month}</option>
            }
        });
        
        const initialYearList = yearsInit.map(year => {
            
            if(this.props.rangeofValues.initYear > this.props.rangeofValues.endYear) {
                this.finalYear(this.props.rangeofValues.initYear + 1);
            }
            else if(this.props.rangeofValues.initYear === this.props.rangeofValues.endYear) {
                if(months.indexOf(this.props.rangeofValues.initMonth) > months.indexOf(this.props.rangeofValues.endMonth)) {
                    if(this.props.rangeofValues.initMonth === "December") {
                        this.finalYear(this.props.rangeofValues.initYear + 1);
                    }
                    else {
                        this.finalMonth(months[months.indexOf(this.props.rangeofValues.initMonth)+1]);
                    }
                }
            }

            return <option value={year} key={year}>{year}</option>
        });

        const endYearList = yearsEnd.map(year => {
            let enable_disable = true;
            
            if(year < this.props.rangeofValues.initYear) {
                enable_disable = false;
            }
            if(this.props.rangeofValues.endYear === this.props.rangeofValues.initYear) {
                if(months.indexOf(this.props.rangeofValues.initMonth) > months.indexOf(this.props.rangeofValues.endMonth)) {
                    this.finalMonth(months[months.indexOf(this.props.rangeofValues.initMonth)+1]);
                }
            }           
            
            if(enable_disable === true) {
                return <option value={year} key={year} >{year}</option>
            }
            else{
                return <option value={year} key={year} disabled>{year}</option>
            }
        });

        const chart_types = ['line', 'bar', 'area','gradient', 'dot'];
        const chartOptionList = chart_types.map(dashboardType => {
            return <NavItem 
            value={dashboardType}
            key={dashboardType}
            onClick={ e => this.dashboardSelectorHandler(e,dashboardType) }
            >{dashboardType} chart</NavItem>
        });
    
        return( 
            <Collapsible className="collapseNav">
                <CollapsibleItem header='Data Values' icon='keyboard_arrow_down'>
                    <Row>
                        <Col s={12}>
                            <h2>Range of Values</h2>
                        </Col>
                    </Row>
                    <Row className="buttonsRange">
                        
                        <Col s={12}>
                            <h6 s={12} l={6} className="rangeValues">Initial</h6>
                        </Col>
                        <Input s={6} className="selector" type='select' label="Month" value={this.props.rangeofValues.initMonth} onChange={ e => this.initMonth(e.target.value)}>{initialMonthList}</Input>
                        <Input s={6} type='select' label="Year" value={this.props.rangeofValues.initYear} onChange={ e => this.initYear(e.target.value)}>{initialYearList}</Input>

                        <Col s={12}>
                            <h6 s={12}className="rangeValues">Final</h6>
                        </Col>
                        <Input s={6} className="selector" type='select' label="Month" value={this.props.rangeofValues.endMonth}  onChange={ e => this.finalMonth(e.target.value)}>{endMonthList}</Input>
                        <Input s={6} type='select' label="Year" value={this.props.rangeofValues.endYear} onChange={ e => this.finalYear(e.target.value)}>{endYearList}</Input>
                        
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,3)}>3m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,6)}>6m<Icon left>tune</Icon></Button>
                        <Button s={6} waves='light' onClick={e => this.rangeButtonsHandler(e,12)}>1y<Icon left>tune</Icon></Button>
                    </Row>
                    <Row className="dashboardType">
                        <Col s={12}>
                            <h2>Type of Dashboard</h2>
                        </Col>
                        <Dropdown s={12} trigger={<div><Button className="dropdownCharts">Select Dashboard!<Icon right>keyboard_arrow_down</Icon></Button></div>}>{chartOptionList}</Dropdown>
                    </Row>
                    <Row className="chartShow">
                        <Col s={12}>
                            <h2>Charts</h2>
                        </Col>
                        <Col s={12}>
                            {/*<Input name='income_outcome' type='checkbox' value='income_outcome' label='Incomes/Outcomes' onChange={e => this.chartsSelectionHandler(e,e.target.checked)}/>*/}
                            <Input name='profit' type='checkbox' value='profit' label='Profit' checked='true' onChange={e => this.chartsSelectionHandler(e,e.target.value, e.target.checked)}/>
                            <Input name='revenue' type='checkbox' value='revenue' label='Net Revenue' checked='true' onChange={e => this.chartsSelectionHandler(e,e.target.value, e.target.checked)}/>
                        </Col>
                    </Row>
             
            </CollapsibleItem>
            </Collapsible>
        );
    }
}