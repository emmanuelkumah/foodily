import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // const updatedCartItems = [...state.items, action.item];
    const updatedTotalAmount =
      state.totalAmount + action.item.amt * action.item.qnty;
    const indexOfExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // find existing item in the cart
    const existingCartItem = state.items[indexOfExistingItem];

    let updatedCartItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amt: existingCartItem.amt + action.item.amt,
      };
      updatedCartItems = [...state.items];
      //update the item in cart

      updatedCartItems[indexOfExistingItem] = updatedItem;
    } else {
      updatedCartItems = [...state.items, action.item];
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartItemsState, dispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItem = (item) => {
    console.log("item is ", item);
    dispatchAction({ type: "ADD_ITEM", item: item });
  };
  const handleRemoveItem = (id) => {
    console.log(id);
  };

  //context data
  const cartContext = {
    items: cartItemsState.items,
    totalAmount: cartItemsState.totalAmount,
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
