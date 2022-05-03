import React, { useState, useEffect } from "react";
import classes from "./MainMeals.module.css";
import SingleMeal from "./SingleMeal";

function MainMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMeals = async () => {
    const response = await fetch(
      "https://tastybud-40399-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.ok) {
      throw new Error("Oops! Something is wrong");
    }
    const responseData = await response.json();

    const getMeals = [];
    for (const [key, value] of Object.entries(responseData)) {
      getMeals.push({
        id: key,
        name: value.name,
        desc: value.desc,
        amt: value.amt,
        img: value.img,
      });
    }
    setMeals(getMeals);
  };

  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const loading = isLoading && (
    <section>
      <h2>Loading meals </h2>
    </section>
  );

  const errMsg = error && (
    <section>
      <h2>{error}</h2>
    </section>
  );

  const mealLists = meals.map((meal) => (
    <SingleMeal
      key={meal.id}
      id={meal.id}
      img={meal.img}
      name={meal.name}
      desc={meal.desc}
      amt={meal.amt}
    />
  ));

  return (
    <section className={classes.mainMealContainer}>
      <h3 className={classes.mealHeading}>Enjoy Yummy Meals Everyday</h3>
      {loading}
      {errMsg}
      <div>
        <ul className={classes.cards}>{mealLists}</ul>
      </div>
    </section>
  );
}

export default MainMeals;
