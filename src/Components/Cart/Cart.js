import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Cart.module.css";

function Cart() {
  return (
    <div>
      <IconContext.Provider value={{ color: "white" }}>
        <FaShoppingCart />
        <span className={classes.cartNotf}>5</span>
      </IconContext.Provider>
    </div>
  );
}

export default Cart;
