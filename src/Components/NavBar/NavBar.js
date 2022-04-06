import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsHeadphones } from "react-icons/bs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
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

        <ul className={classes.navMenu}>
          <li className={classes.menuItem}>Home</li>
          <li className={classes.menuItem}>Services</li>
          <li className={classes.menuItem}>Blog </li>
        </ul>
        <div className={classes.iconContainer}>
          <IconContext.Provider value={{ color: "white" }}>
            <div className={classes.phoneDetls}>
              <BsHeadphones /> 02333323
            </div>
            <div className={classes.cart}>
              <FaShoppingCart />
              <p className={classes.cartNotf}>5</p>
            </div>

            <FaSearch />
          </IconContext.Provider>
        </div>

        {/* <span>
          <IconContext.Provider value={{ color: "white" }}>
            <div className={classes.phoneNum}>
              <BsHeadphones />
              +233 23213332
            </div>
            <div className={classes.cart}>
              <FaShoppingCart />
              <div className={classes.cartNotf}>
                <p>5</p>
              </div>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "white" }}>
            <FaSearch />
          </IconContext.Provider>
        </span> */}

        <IconContext.Provider value={{ color: "white", size: "2rem" }}>
          <GiHamburgerMenu className={classes.menuIcon} onClick={toggleMenu} />
        </IconContext.Provider>
      </nav>
    </>
  );
}

export default NavBar;
