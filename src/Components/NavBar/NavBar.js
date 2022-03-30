import React from "react";
import classes from "./NavBar.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";
import CartIcon from "../Cart/CartIcon";

function NavBar() {
  return (
    <>
      <header className={classes.nav}>
        <NavMenu className={classes.navMenu} />
        <CartIcon />
        {/* <Cart /> */}
        <Search />
      </header>
    </>
  );
}

export default NavBar;
