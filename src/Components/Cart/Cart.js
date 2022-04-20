import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

export const Cart = ({ handleHideCart }) => {
  const cartContext = useContext(CartContext);
  // const cartItems = [
  //   { id: 1, name: "Cheese", amt: 50 },
  //   { id: 2, name: "Rice and chicken", amt: 150 },
  //   { id: 2, name: "Pizza", amt: 30 },
  // ];
  const items = cartContext.items.map((item) => {
    return (
      <ul key={item.id} className={classes["cart-items"]}>
        <li>{item.name}</li>
      </ul>
    );
  });

  const totalAmt = cartContext.items.reduce(
    (acc, currentItem) => acc + currentItem.amt,
    0
  );
  return (
    <Modal handleHideCart={handleHideCart}>
      {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`GHS ${totalAmt.toFixed(2)}`}</span>
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
