import React from 'react';
import { Icon, Button } from 'react-materialize';

const NavItemIcon = ({ tooltipText, hrefPath, icon }) => (
  <li>
    <Button
      tooltip={tooltipText}
      node="a"
      href={hrefPath}
      flat
      large
      waves="light"
    >
      <Icon>{icon}</Icon>
    </Button>
    Bu
  </li>
);

export default NavItemIcon;
