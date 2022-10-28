import React from "react";
import classes from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

const Navigation: React.FC = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLinks isMobile={false} closeMobileMenu={() => {}} />
    </nav>
  );
};

export default Navigation;
