import React, { useRef, useState } from "react";
import classes from "./mealsDel.module.css";
import { GrMapLocation } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

function MenuLoc() {
  const [invalidInput, setInvalidInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRefInput = useRef();
  const formRef = useRef();

  const deliveryFormHandler = (event) => {
    event.preventDefault();

    const emptyEmail = emailRefInput.current.value.trim() === "";
    console.log("is empty field", emptyEmail);
    if (emptyEmail) {
      setInvalidInput(true);
    } else {
      setIsSubmitted(true);
      setInvalidInput(false);
      formRef.current.reset();
    }
  };
  return (
    <section className={classes.mealsDelContainer}>
      <div className={classes.col}>
        <h4 className={classes.footerHeading}>
          Discover great recipes to cook for the family everyday
        </h4>
      </div>
      <div className={classes.col}>
        <form onSubmit={deliveryFormHandler} ref={formRef}>
          <input
            type="text"
            className={`${invalidInput ? classes.invalidEmail : ""}`}
            placeholder="Enter your email address"
            ref={emailRefInput}
          />

          <button className={classes.btnDel}>Go </button>
          {invalidInput && (
            <p className={classes.invalidEmail}>Please enter a valid email</p>
          )}
        </form>
        {isSubmitted && (
          <h4 className={classes.emailSubmitted}>
            Wow!, Email has been submitted successfully
          </h4>
        )}
      </div>
    </section>
  );
}

export default MenuLoc;
