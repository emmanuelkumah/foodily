import React from "react";
import dishes from "./dishData";
import classes from "./MenuDish.module.css";

function MenuDish() {
  const menuCardItem = dishes.map(function (dish) {
    return (
      <div className={classes["menuCard--item"]}>
        <div className={classes["menuCard--cover"]}>
          <img src={dish.img} alt="menuCover" />
        </div>
        <div className={classes["menuCard--content"]}>
          <h3>{dish.name}</h3>
          <p>{`${dish.desc.slice(0, 120)} ...`}</p>
          <p className={classes["menuCard--amt"]}>{`$${dish.amt}`}</p>
          <button className={classes["menuCard-btn"]}>Add to Card</button>
        </div>
      </div>
    );
  });
  return (
    <section className={classes.mainMenuContainer}>
      <h3 className={classes.menuHeading}>Yummy Meals Everyday</h3>
      <div className={classes.menuCards}>{menuCardItem}</div>
    </section>
  );
}

export default MenuDish;
