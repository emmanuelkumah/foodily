import React from "react";
import CartContext from "./cartContext";

function CartProvider(props) {
  const handleAddItem = (item) => {
    console.log(item);
  };
  const handleRemoveItem = (id) => {
    console.log(id);
  };
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
