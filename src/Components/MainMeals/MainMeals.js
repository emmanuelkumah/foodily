import React from "react";
import meals from "./availableMealsData";
import classes from "./MainMeals.module.css";
import { BsCartCheck } from "react-icons/bs";

function MainMeals() {
  const mealCardItem = meals.map(function (meal) {
    return (
      <div
        key={meal.id}
        className={`${classes["mealCard--item"]} ${classes["hvr-grow"]}`}
      >
        <div className={classes["mealCard--cover"]}>
          <img src={meal.img} alt="mealCover" />
        </div>
        <div className={classes["mealCard--content"]}>
          <h3>{meal.name}</h3>
          <p>{`${meal.desc.slice(0, 120)} ...`}</p>
          <p className={classes["mealCard--amt"]}>{`$${meal.amt}`}</p>
          <button className={classes["mealCard-btn"]}>
            <BsCartCheck /> Add to Cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <section className={classes.mainMealContainer}>
      <h3 className={classes.mealHeading}>Yummy Meals Everyday</h3>
      <div className={`${classes.mealCards}`}>{mealCardItem}</div>
    </section>
  );
}

export default MainMeals;
