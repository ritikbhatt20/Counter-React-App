import React, { Component } from "react";

// stateless functional component ...shortcut sfc
// object destructuring of props.totalCounters 
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};                                                

export default NavBar;
