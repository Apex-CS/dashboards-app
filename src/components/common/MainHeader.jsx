import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import NavItem from './NavItem';
import NavItemIcon from './NavItemIcon';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/apex-logo.jpg';
import '../../assets/css/header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  currentPath() {
    if(window.location.pathname == '/help')
      return '/adaptive_mode/help'
    else
      return '/adaptive_mode'
  }

  screenSize() {
    console.log(this.props.screenSize);
    if (this.props.screenSize == 's' || this.props.screenSize == 'xs' || this.props.screenSize == 'xxs')
    {
      return [
        <div>   
          <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} right className='top-menu'>
              <NavItem href='/dashboards'>Go To Dashboards</NavItem>
              <NavItemIcon tooltipText="Help" hrefPath="/help" icon="help"/>
          </Navbar>
        </div>
      ]
    }else {
      return [
        <div>   
          <Navbar brand={<Link to="/"><img href="/" className="navbar_logo" src={logo} /></Link>} right className='top-menu'>
              <NavItem href='/dashboards'>Go To Dashboards</NavItem>
              <NavItemIcon tooltipText="Adaptative mode" hrefPath={this.currentPath()} icon="view_array"/>
              <NavItemIcon tooltipText="Mobile mode" hrefPath="/mobile_mode" icon="phone_iphone"/>
              <NavItemIcon tooltipText="Help" hrefPath="/help" icon="help"/>
          </Navbar>
        </div>
      ];
    }
  }

  render() {
    return(this.screenSize())
  }
}

export default Header;