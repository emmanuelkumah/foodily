import React from "react";
import CartContext from "./cartContext";

function CartProvider(props) {
  // addCart, removeCart functions
  const handleAddItemToCart = () => {};
  const handleRemoveItemFromCart = () => {};

  //data to be shared to the different components
  const cartContext = {
    items: [],
    totalAmt: 0,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
