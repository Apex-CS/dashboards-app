import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import NavItem from '../common/NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/apex-logo.jpg';
import '../../assets/css/header.css';

export default class M_HeaderCharts extends Component {
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
    const pathtoHome = (!window.location.href.includes("apex-cs.github.io")) ? "/dashboards-app/adaptive_mode" : "/adaptive_mode";

    return(    
      <Navbar href={pathtoHome} brand={<Link to={pathtoHome}><img href='/adaptive_mode' className="navbar_logo" src={logo} /></Link>} right className='top-menu'>
        {chartOptionList}
        <NavItem href='/adaptive_mode/help'><Icon>help</Icon></NavItem>    
      </Navbar>
    );
  }
}