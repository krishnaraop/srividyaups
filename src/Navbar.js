import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <div>
      <div className="mainHeader">
        <span>logo</span> &nbsp;
        <h1>Sri Vidya Upper Primary School</h1>
      </div>

      {/* <Nav card justified pills tabs>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Achievements</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact Us</NavLink>
        </NavItem>
      </Nav> */}
    </div>
  );
};

export default Navbar;
