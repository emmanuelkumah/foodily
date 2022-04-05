import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartIcon.module.css";

function CartIcon() {
  return (
    <div className={classes.cart}>
      <FaShoppingCart />
      <div className={classes.cartNotf}>
        <p>5</p>
      </div>
    </div>
  );
}

export default CartIcon;
