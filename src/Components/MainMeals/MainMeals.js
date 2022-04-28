import React, { useContext } from "react";
import meals from "./availableMealsData";
import classes from "./MainMeals.module.css";
<<<<<<< HEAD
import { BsCartCheck } from "react-icons/bs";
import CartContext from "../../store/cartContext";

function MainMeals() {
  const cartContext = useContext(CartContext);
  console.log("this context is", cartContext);

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
          <button
            className={classes["mealCard-btn"]}
            onClick={() => cartContext.addItem(meal)}
          >
            <BsCartCheck /> Add to Cart
          </button>
        </div>
      </div>
=======
import SingleMeal from "./SingleMeal";

function MainMeals() {
  const mealLists = meals.map(function (meal) {
    return (
      <SingleMeal
        id={meal.id}
        img={meal.img}
        name={meal.name}
        desc={meal.desc}
        amt={meal.amt}
      />
>>>>>>> SingleMeal
    );
  });
  return (
    <section className={classes.mainMealContainer}>
      <h3 className={classes.mealHeading}>Enjoy Yummy Meals Everyday</h3>
      <div>
        <ul className={classes.cards}>{mealLists}</ul>
      </div>
    </section>
  );
}

export default MainMeals;
