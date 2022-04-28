import React from "react";
import Input from "./Input";
import classes from "./Form.module.css";

function Form({ id }) {
  return (
    <div>
      <form className={classes.form}>
        <Input
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
      </form>
    </div>
  );
}

export default Form;
