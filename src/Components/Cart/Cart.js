import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

export const Cart = ({ handleHideCart }) => {
  return (
    <Modal handleHideCart={handleHideCart}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>80</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleHideCart}>
          Cancel
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
