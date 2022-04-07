import React from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";

export const Cart = (props) => {
  const cartItems = [
    { id: 1, name: "Cheese", amt: 50 },
    { id: 2, name: "Rice and chicken", amt: 150 },
    { id: 2, name: "Pizza", amt: 30 },
  ];
  const items = cartItems.map((item) => {
    return (
      <ul className={classes["cart-items"]}>
        <li>{item.name}</li>
      </ul>
    );
  });
  return (
    <Modal>
      {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>500</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
