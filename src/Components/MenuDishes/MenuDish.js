import React from "react";
import dishes from "./dishData";
import classes from "./MenuDish.module.css";

function MenuDish() {
  console.log(dishes);
  const menuItem = dishes.map(function (dish) {
    return (
      <div className={classes.dishItem}>
        <img src={dish.img} alt="dishes" className={classes.dishImg} />
        <h3>{dish.name}</h3>
        <p>{dish.amount}</p>
        <p className={classes.dishDetls}>{dish.desc}</p>
      </div>
    );
  });
  return (
    <section className={classes.dishContainer}>
      <h1>Best Selling Menus</h1>
      <div className={classes.dishSecxn}>{menuItem}</div>
    </section>
  );
}

export default MenuDish;
