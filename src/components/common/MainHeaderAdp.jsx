import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize'
import logo from '../../assets/images/intersys-logo.svg';
import '../../assets/css/header.css';

class HeaderAdp extends Component {
  render() {
    return(    
      <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} right className='top-menu'>
          <NavItem href='/dashboards'>Go To Dashboards</NavItem>
          <NavItem href='/'><Icon>view_compact</Icon></NavItem>
          <NavItem href='/help'><Icon>help</Icon></NavItem>
      </Navbar>
    );
  }
}

export default HeaderAdp;