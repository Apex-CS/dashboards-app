import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/apex-logo.svg';
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
              <NavItem href='/help'>Help<Icon>help</Icon></NavItem>
          </Navbar>
        </div>
      ]
    }else {
      const pathtoHome = (!window.location.href.includes("apex-cs.github.io")) ? "/dashboards-app/" : "/";
      
      return [
        <div>   
          <Navbar brand={<Link to={pathtoHome}><img href={pathtoHome} className="navbar_logo" src={logo} /></Link>} right className='top-menu'>
              <NavItem href='/dashboards'>Go To Dashboards</NavItem>
              <NavItem href={this.currentPath()}><Icon>view_array</Icon></NavItem>
              <NavItem href="/mobile_mode"><Icon>phone_iphone</Icon></NavItem>
              <NavItem href='/help'><Icon>help</Icon></NavItem>
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