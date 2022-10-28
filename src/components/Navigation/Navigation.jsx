import React from "react";
import classes from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
