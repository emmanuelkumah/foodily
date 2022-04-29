import React from "react";
import meals from "./availableMealsData";
import classes from "./MainMeals.module.css";
import SingleMeal from "./SingleMeal";

function MainMeals() {
  const mealLists = meals.map(function (meal) {
    return (
      <SingleMeal
        key={meal.id}
        id={meal.id}
        img={meal.img}
        name={meal.name}
        desc={meal.desc}
        amt={meal.amt}
      />
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
