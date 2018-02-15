import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize'
import logo from '../assets/images/intersys-logo.svg';
import '../assets/css/header.css';

export default class HeaderGraphics extends Component {
  constructor(props) {
    super(props);
    this.chartSelectorHandler = this.chartSelectorHandler.bind(this);
  } 
  
  chartSelectorHandler(e,chartType) {
    e.preventDefault();
    this.props.onChartTypeChange(chartType);
  }
  
  render() {

    const chart_types = ['line', 'bar', 'area','gradient', 'dot'];
        const chartOptionList = chart_types.map(chartType => {
            return <NavItem 
            value={chartType}
            key={chartType}
            onClick={ e => this.chartSelectorHandler(e,chartType) }
            >{chartType} chart</NavItem>
        });

    return(    
    <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} right className='top-menu'>
      {chartOptionList}
      <NavItem href='#'><Icon>help</Icon></NavItem>    
    </Navbar>
    );
  }
}