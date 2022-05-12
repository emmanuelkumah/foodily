import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amt * action.item.qnty;
    //check if item exists
    const indexOfExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // find existing item in the cart
    const existingCartItem = state.items[indexOfExistingItem];

    let updatedCartItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        qnty: existingCartItem.qnty + action.item.qnty,
      };
      updatedCartItems = [...state.items];
      //update the item in cart

      updatedCartItems[indexOfExistingItem] = updateItem;
    } else {
      updatedCartItems = [...state.items, action.item];
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // remove item from cart
  if (action.type === "REMOVE_ITEM") {
    const indexOfItemToRemove = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[indexOfItemToRemove];
    //update total amount
    const updatedTotalAmount = state.totalAmount - existingItem.amt;

    let updatedCartItems;
    if (existingItem.qnty === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, qnty: existingItem.qnty - 1 };

      updatedCartItems = [...state.items];
      updatedCartItems[indexOfItemToRemove] = updateItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //clear items in cart
  if ((action.type = "Clear")) {
    return defaultCartState;
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartItemsState, dispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItem = (item) => {
    dispatchAction({ type: "ADD_ITEM", item: item });
  };

  const handleRemoveItem = (id) => {
    dispatchAction({ type: "REMOVE_ITEM", id: id });
  };

  const handleClearItem = () => {
    dispatchAction({ type: "Clear" });
  };

  //context data
  const cartContext = {
    items: cartItemsState.items,
    totalAmount: cartItemsState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    clearItem: handleClearItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
