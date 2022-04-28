import React from "react";
import Form from "../MealsFormInput/Form";
import classes from "./SingleMeal.module.css";

function SingleMeal({ id, name, img, amt, desc }) {
  return (
    <div className={`${classes.cardItem} ${classes["hvr-grow"]}`}>
      <li key={name}>
        <div>
          <div className={classes["cardItem--cover"]}>
            <img src={img} alt="mealCover" />
          </div>
          <div className={classes["cardItem--content"]}>
            <h3>{name}</h3>
            <p>{`${desc.slice(0, 120)} ...`}</p>
            <p className={classes["cardItem--amt"]}>{`₵ ${amt}`}</p>
          </div>
        </div>
        <Form id={id} />
      </li>
    </div>
  );
}

export default SingleMeal;
