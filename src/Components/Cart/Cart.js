import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

export const Cart = ({ handleHideCart }) => {
  const cartContext = useContext(CartContext);

  const isEmptyCart = cartContext.items.length === 0;
  console.log("cart is empty", isEmptyCart);

  const addItem = (item) => {
    cartContext.addItem({ ...item, qnty: 1 });
  };
  const removeItem = (id) => {
    cartContext.removeItem(id);
  };
  const items = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          name={item.name}
          amt={item.amt}
          qnty={item.qnty}
          removeItem={removeItem.bind(null, item.id)}
          addItem={addItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = cartContext.totalAmount.toFixed(2);
  return (
    <Modal handleHideCart={handleHideCart}>
      {isEmptyCart ? <h2>You have no meal in your cart </h2> : items}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`${totalAmount} GHS`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleHideCart}>
          Cancel
        </button>
        {isEmptyCart ? "" : <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
