import React, { useRef, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";

import Input from "./Input";
import classes from "./Form.module.css";

function Form({ id, addItemToCart }) {
  const [enteredQntyIsValid, setEnteredQntyIsValid] = useState(true);
  const quantityInputRef = useRef();

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const enteredQnty = quantityInputRef.current.value;
    const enteredQntyNum = +enteredQnty;
    if (
      enteredQnty.trim().length === 0 ||
      enteredQntyNum < 1 ||
      enteredQntyNum > 5
    ) {
      setEnteredQntyIsValid(false);
      return;
    }
    addItemToCart(enteredQntyNum);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleFormSubmission}>
        <Input
          ref={quantityInputRef}
          label="Quantity"
          input={{
            id: "quantity" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        {!enteredQntyIsValid && <p>Please enter a valid quantity(1-5)</p>}
        <button className={classes.btnForm}>
          <BsCartPlusFill /> Add
        </button>
      </form>
    </div>
  );
}

export default Form;
