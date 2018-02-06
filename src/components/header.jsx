import React, { Component } from 'react';
import {Navbar, NavItem } from 'react-materialize'
import logo from '../assets/images/intersys-small.svg';
import '../assets/css/header.css';

class Header extends Component {
  render() {
    return(    
    <Navbar className='top-menu'>
        <NavItem href='#'><img className='navigation-logo' src={logo}/></NavItem>
        <NavItem href='#'>Graphics</NavItem>
        <NavItem href='#'>?</NavItem>
    </Navbar>
    );
  }
}

export default Header;