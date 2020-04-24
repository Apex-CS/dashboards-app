import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/apex-logo.jpg';
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

      <Navbar brand={<Link to="/adaptive_mode"><img href="/adaptive_mode" className="navbar_logo" src={logo} /></Link>} right className='top-menu'>
          <NavItem href='/adaptive_mode/dashboards'>Go To Dashboards</NavItem>
          <NavItem href={this.currentPath()}><Icon>view_compact</Icon></NavItem>
          <NavItem href='/adaptive_mode/help'><Icon>help</Icon></NavItem>
      </Navbar>
    );
  }
}

export default HeaderAdp;