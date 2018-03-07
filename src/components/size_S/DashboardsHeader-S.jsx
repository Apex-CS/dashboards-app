import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize'
import logo from '../../assets/images/intersys-logo.svg';
import '../../assets/css/header.css';

export default class S_HeaderCharts extends Component {
  constructor(props) {
    super(props);
    this.dashboardSelectorHandler = this.dashboardSelectorHandler.bind(this);
  } 
  
  dashboardSelectorHandler(e,dashboardType) {
    e.preventDefault();
    this.props.onDashboardTypeChange(dashboardType);
  }
  
  render() {

    const chart_types = ['line', 'bar', 'area','gradient', 'dot'];
        const chartOptionList = chart_types.map(dashboardType => {
            return <NavItem 
            value={dashboardType}
            key={dashboardType}
            onClick={ e => this.dashboardSelectorHandler(e,dashboardType) }
            >{dashboardType} chart</NavItem>
        });

    return(    
    <Navbar brand={<img href="/" className="navbar_logo_M" src={logo} />} right className='top-menu navBar_M'>
      {chartOptionList}
      <NavItem href='/help'><Icon>help</Icon></NavItem>    
    </Navbar>
    );
  }
}