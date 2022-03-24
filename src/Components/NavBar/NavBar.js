import React from "react";
import classes from "./NavBar.module.css";
import Cart from "../Cart/Cart";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";

function NavBar() {
  return (
    <>
      <header className={classes.nav}>
        <NavMenu className={classes.navMenu} />
        <Cart />
        <Search />
      </header>
    </>
  );
}

export default NavBar;
