import React from "react";
import classes from "./NavMenu.module.css";
function NavMenu() {
  return (
    <>
      <div>
        <h1 className={classes.navLogo}>TastyBud</h1>
      </div>
      <ul className={classes.navMenu}>
        <li className={classes.menuItem}>Home</li>
        <li className={classes.menuItem}>Services</li>
        <li className={classes.menuItem}>Blog </li>
      </ul>
    </>
  );
}

export default NavMenu;
