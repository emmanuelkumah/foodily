import React from "react";
import { IconContext } from "react-icons";

import { BsHeadphones } from "react-icons/bs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function NavMenu() {
  return (
    <>
      {/* <section className={classes.navContainer}>
        <ul className={classes.navMenu}>
          <li className={classes.menuItem}>Home</li>
          <li className={classes.menuItem}>Services</li>
          <li className={classes.menuItem}>Blog </li>
        </ul>
        <section className={classes.iconsContainer}>
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
        </section>
        <IconContext.Provider value={{ color: "white" }}>
          <FaSearch />
        </IconContext.Provider>
      </section> */}
    </>
  );
}

export default NavMenu;
