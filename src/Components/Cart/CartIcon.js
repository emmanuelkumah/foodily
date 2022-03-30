import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./CartIcon.module.css";

function CartIcon() {
  return (
    <div className={classes.cart}>
      <IconContext.Provider value={{ color: "white" }}>
        <FaShoppingCart />
        <div className={classes.cartNotf}>
          <p>5</p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default CartIcon;
