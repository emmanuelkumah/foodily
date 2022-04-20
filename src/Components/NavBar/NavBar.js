import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import CartNotification from "../CartNotification/CartNotification";

function NavBar({ handleShowCart }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className={classes.nav}>
        <h1>
          <a href="#" className={classes.navLogo}>
            TastyPouch
          </a>
        </h1>

        <ul
          className={showMenu ? classes.navMenuVisible : classes.navMenuHidden}
        >
          <li className={classes.menuItem}>Home</li>
          <li className={classes.menuItem}>Services</li>
          <li className={classes.menuItem}>Blog </li>
        </ul>

        <div
          className={
            showMenu
              ? classes.iconContainerVisible
              : classes.iconContainerHidden
          }
        >
          <IconContext.Provider value={{ color: "white" }}>
            <div className={classes.phoneDetls}>
              <p>
                {" "}
                <BsHeadphones />
                +233 254 234
              </p>
            </div>
            <CartNotification handleShowCart={handleShowCart} />
            <FaSearch className={classes.searchIcon} />
          </IconContext.Provider>
        </div>
        {showMenu ? (
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <AiOutlineCloseSquare
              className={classes.menuIcon}
              onClick={toggleMenu}
            />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "white", size: "2rem" }}>
            <GiHamburgerMenu
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
