import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/intersys-logo.svg';
import '../../assets/css/header.css';

export default class HeaderGraphics extends Component {
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
    <Navbar brand={<Link to="/"><img href="/" className="navbar_logo" src={logo} /></Link>} right className='top-menu'>
      {chartOptionList}
      <NavItem href='/help'><Icon>help</Icon></NavItem>    
    </Navbar>
    );
  }
}