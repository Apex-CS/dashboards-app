import React, { Component } from 'react';
import {Navbar, NavItem, Icon } from 'react-materialize'
import logo from '../assets/images/intersys-logo.svg';
import '../assets/css/header.css';

class Header extends Component {
  render() {
    return(    
    <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} right className='top-menu'>
        <NavItem href='/dashboards'>Go To Dashboards</NavItem>
        <NavItem href='/help'><Icon>help</Icon></NavItem>
    </Navbar>
    );
  }
}

export default Header;