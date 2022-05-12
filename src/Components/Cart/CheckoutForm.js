import React, { useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

//check if input is not empty
const notEmpty = (value) => value.trim() !== "";

const hasFiveChars = (value) => value.trim().length === 5;

const CheckoutForm = ({ handleHideCart, handleSubmitOrder }) => {
  const [isValidInput, setValidInput] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity);

    const validName = notEmpty(enteredName);
    const validCity = notEmpty(enteredCity);
    const validStreet = notEmpty(enteredStreet);
    const validPostalCode = hasFiveChars(enteredPostalCode);

    console.log(validName, validStreet, validPostalCode, validCity);
    setValidInput({
      name: validName,
      street: validStreet,
      city: validStreet,
      postalCode: validPostalCode,
    });

    const validForm = validName && validCity && validStreet && validPostalCode;

    if (!validForm) {
      return;
    }

    handleSubmitOrder({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  return (
    <form className={classes.form} onSubmit={handleFormSubmission}>
      <div
        className={`${classes.control} ${
          isValidInput.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!isValidInput.name && <p>Please enter your name</p>}
      </div>
      <div
        className={`${classes.control} ${
          isValidInput.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!isValidInput.street && <p>Please enter the street</p>}
      </div>
      <div
        className={`${classes.control} ${
          isValidInput.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!isValidInput.postalCode && <p>Please enter max of 5 chars</p>}
      </div>
      <div
        className={`${classes.control} ${
          isValidInput.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!isValidInput.city && <p>Please enter your city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={handleHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
