import React, { useReducer } from "react";
import CartContext from "./cartContext";

const initialCartState = {
  items: [],
  totalAmt: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItem = [...state.items, action.item];
    const updatedTotalAmount = state.totalAmt + action.item.amt;
    return {
      items: updatedItem,
      totalAmt: updatedTotalAmount,
    };
  }
  return initialCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  console.log("meals added", cartState.items);
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  //data to be shared to the different components
  const cartContext = {
    items: cartState.items,
    totalAmt: cartState.totalAmt,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
