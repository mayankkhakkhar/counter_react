import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        NavBar {totalCounters}
      </a>
    </nav>
  );
};

export default Navbar;
