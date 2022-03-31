import React from "react";
import mealsCategories from "./mealsCatData";
import classes from "./MealsCat.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

function MealsCat() {
  const noItems = 5;
  let catItems = mealsCategories.slice(0, noItems);

  const meals = catItems.map((mealCat) => (
    <div className={classes.lists} key={mealCat.id}>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        {mealCat.icon}
      </IconContext.Provider>
      <ul>
        <li>{mealCat.item}</li>
      </ul>
    </div>
  ));
  //move to next category item

  return (
    <section className={classes.menuCatg}>
      <h2 className={classes.catgHeading}>Menu Categories</h2>
      <p className={classes.catgSubHead}>
        Wide variety of tasty menus to choose from{" "}
      </p>
      <IconContext.Provider value={{ size: "2rem", padding: "10px" }}>
        <BsChevronLeft className={classes.chevLeft} />
        <BsChevronRight />
      </IconContext.Provider>
      <section className={classes.catgLists}>{meals}</section>
    </section>
  );
}

export default MealsCat;