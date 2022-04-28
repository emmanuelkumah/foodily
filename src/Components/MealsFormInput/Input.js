import React from "react";
import classes from "./Input.module.css";
import { BsCartPlusFill } from "react-icons/bs";
function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      <button>
        <BsCartPlusFill /> Add
      </button>
    </div>
  );
}

export default Input;
