import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <Nav card justified pills tabs>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Achievements</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact Us</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
