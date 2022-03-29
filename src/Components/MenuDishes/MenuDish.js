import React from "react";
import dishes from "./dishData";
import classes from "./MenuDish.module.css";

function MenuDish() {
  console.log(dishes);
  const menuItem = dishes.map(function (dish) {
    return (
      <div className={classes.menuCardItem}>
        <img src={dish.img} alt="dishes" className={classes.menuCardImg} />
        <h3>{dish.name}</h3>
        <p className={classes.menuAmt}>{`$${dish.amt}`}</p>
        <p className={classes.menuCardDetls}>{`${dish.desc.slice(
          0,
          120
        )}...`}</p>
        <button className={classes.btnOrder}>Add To Cart</button>
      </div>
    );
  });
  return (
    <section className={classes.mainMenuContainer}>
      <h1>Best Selling Menus</h1>
      <div className={classes.menuCards}>{menuItem}</div>
    </section>
  );
}

export default MenuDish;
