import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize'
import logo from '../../assets/images/intersys-logo.svg';
import '../../assets/css/header.css';

class HeaderAdp extends Component {

  currentPath(){
    if(window.location.pathname == '/adaptive_mode/help')
      return '/help'
    else
      return '/'
  }

  render() {
    return(    
      <Navbar href="/adaptive_mode" brand={<img href="/adaptive_mode" className="navbar_logo" src={logo} />} right className='top-menu'>
          <NavItem href='/adaptive_mode/dashboards'>Go To Dashboards</NavItem>
          <NavItem href={this.currentPath()}><Icon>view_compact</Icon></NavItem>
          <NavItem href='/adaptive_mode/help'><Icon>help</Icon></NavItem>
      </Navbar>
    );
  }
}

export default HeaderAdp;