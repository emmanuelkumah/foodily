import React from "react";
import classes from "./menuLoc.module.css";

function MenuLoc() {
  return (
    <section className={classes["subFooter--wraper"]}>
      <div className={classes["col"]}>
        <h4 className={classes.footerHeading}>
          Discover restuarants that deliver near you
        </h4>
      </div>
      <div className={classes["col"]}>
        <input type="text" className={classes.restLoc} />
        <button className={classes["btn--go"]}>Go</button>
      </div>
    </section>
  );
}

export default MenuLoc;
