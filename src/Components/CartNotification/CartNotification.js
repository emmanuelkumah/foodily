import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartNotification.module.css";
import CartContext from "../../store/cartContext";

function CartNotification({ handleShowCart }) {
  const [items] = useContext(CartContext);

  const itemsQnty = items.reduce((acc, currentItem) => {
    return acc + currentItem.qnty;
  }, 0);
  return (
    <div className={classes.cart} onClick={handleShowCart}>
      <FaShoppingCart />
      <p className={classes.cartNotf}>{itemsQnty}</p>
    </div>
  );
}

export default CartNotification;
