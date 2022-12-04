import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/index' activeStyle>
            Home
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;