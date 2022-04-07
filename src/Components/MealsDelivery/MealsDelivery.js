import React from "react";
import classes from "./mealsDel.module.css";
import { GrMapLocation } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

function MenuLoc() {
  return (
    <section className={classes.mealsDelContainer}>
      <div className={classes.col}>
        <h4 className={classes.footerHeading}>
          Discover restuarants that deliver near you
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <GrMapLocation />
          </IconContext.Provider>
        </h4>
      </div>
      <div className={classes.col}>
        <input
          type="text"
          className={classes.delInput}
          placeholder="Enter your location"
        />

        <button className={classes.btnDel}>Go </button>
      </div>
    </section>
  );
}

export default MenuLoc;
