import React, { useState } from "react";
import classes from "./NavBar.module.css";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";
import CartIcon from "../Cart/CartIcon";
import { BsHeadphones } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(true);
  function toggleMenu() {
    setShowMenu(!showMenu);
    setShowHamburgerIcon(!showHamburgerIcon);
  }
  return (
    <>
      <nav className={classes.nav}>
        <h1>
          <a href="#" className={classes.navLogo}>
            TastyPouch
          </a>
        </h1>
        {showMenu && (
          <div className={classes.menuItemContainer}>
            <NavMenu className={classes.navMenu} />
            <div className={classes.iconContainer}>
              <IconContext.Provider value={{ color: "white" }}>
                <BsHeadphones />{" "}
                <span className={classes.phoneNum}>+2332453235</span>
                <CartIcon />
                <Search />
              </IconContext.Provider>
            </div>
          </div>
        )}
        {showHamburgerIcon ? (
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <GiHamburgerMenu
              className={classes.menuIcon}
              onClick={toggleMenu}
            />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <AiOutlineCloseSquare
              className={classes.menuIcon}
              onClick={toggleMenu}
            />
          </IconContext.Provider>
        )}
      </nav>
    </>
  );
}

export default NavBar;
