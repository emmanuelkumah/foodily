import React from "react";
import classes from "./CartItem.module.css";

const CartItem = ({ name, amt, qnty, removeItem, addItem }) => {
  return (
    <li className={classes["cart-item"]}>
      <section>
        <h2>{name}</h2>
        <div classes={classes.summary}>
          <p>
            Price: <span className={classes.price}>{amt.toFixed(2)}</span>
          </p>
          <p>
            Quantity: <span className={classes.qnty}>{qnty}</span>
          </p>
        </div>
      </section>
      <div className={classes.actions}>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
