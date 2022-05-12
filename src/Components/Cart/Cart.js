import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

export const Cart = ({ handleHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const isEmptyCart = cartContext.items.length === 0;

  const addItem = (item) => {
    cartContext.addItem({ ...item, qnty: 1 });
  };
  const removeItem = (id) => {
    cartContext.removeItem(id);
  };

  const handleOrder = () => {
    setIsCheckout(true);
  };

  const handleSubmitOrder = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://tastybud-40399-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    cartContext.clearItem();
  };

  const actionBtns = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={handleHideCart}>
        Cancel
      </button>
      {isEmptyCart ? (
        ""
      ) : (
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      )}
    </div>
  );

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

  const modalContent = (
    <>
      {isEmptyCart ? <h2>You have no meal in your cart </h2> : items}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`${totalAmount} GHS`}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          handleHideCart={handleHideCart}
          handleSubmitOrder={handleSubmitOrder}
        />
      )}
      {!isCheckout && actionBtns}
    </>
  );

  const isSubmittingModalContent = (
    <>
      <h3>Sending order data</h3>
    </>
  );

  const didSubmitModalContent = (
    <>
      <h3>Order has been submitted successfully</h3>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleHideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal handleHideCart={handleHideCart}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};
