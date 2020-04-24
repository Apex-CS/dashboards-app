import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import NavItem from '../common/NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/apex-logo.jpg';
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
    <Navbar href="/adaptive_mode" brand={<Link to="/"><img href="/adaptive_mode" className="navbar_logo_M" src={logo} /></Link>} right className='top-menu navBar_M'>
      {chartOptionList}
      <NavItem href='/adaptive_mode/help'><Icon>help</Icon></NavItem>    
    </Navbar>
    );
  }
}