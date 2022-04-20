import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./CartNotification.module.css";
import CartContext from "../../store/cartContext";

function CartNotification({ handleShowCart }) {
  const cartContxt = useContext(CartContext);

  const noItemsInCart = cartContxt.items.reduce(
    (acc, currntItem) => acc + currntItem.amount,
    0
  );
  return (
    <div className={classes.cart} onClick={handleShowCart}>
      <FaShoppingCart />
      <p className={classes.cartNotf}>{noItemsInCart}</p>
    </div>
  );
}

export default CartNotification;
