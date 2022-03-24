import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";

function Cart() {
  return (
    <div>
      <IconContext.Provider value={{ color: "white" }}>
        <FaShoppingCart />
        <span>5</span>
      </IconContext.Provider>
    </div>
  );
}

export default Cart;
