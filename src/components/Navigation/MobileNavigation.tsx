import React from "react";
import NavLinks from "./NavLinks";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
import classes from "./NavBar.module.scss";

const MobileNavigation: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? (
        <TfiClose
          className={classes.Hamburger}
          size="40px"
          color="white"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <TfiMenuAlt
          className={classes.Hamburger}
          size="40px"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <NavLinks isMobile={true} closeMobileMenu={() => setOpen(false)} />
      )}
    </nav>
  );
};

export default MobileNavigation;
