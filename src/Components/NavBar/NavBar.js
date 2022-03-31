import React from "react";
import classes from "./NavBar.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";
import CartIcon from "../Cart/CartIcon";
import { BsHeadphones } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function NavBar() {
  return (
    <>
      <header className={classes.nav}>
        <NavMenu className={classes.navMenu} />
        <div className={classes.supportWrapper}>
          <IconContext.Provider value={{ color: "white" }}>
            <BsHeadphones />
          </IconContext.Provider>
          <p className={classes.phone}>+2332453235</p>
        </div>

        <CartIcon />
        <Search />
      </header>
    </>
  );
}

export default NavBar;
