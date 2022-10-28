import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
