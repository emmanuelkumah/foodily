import React from "react";
import menuCategories from "./menuData";
import classes from "./MenuCat.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

function MenuCat() {
  const menus = menuCategories.map((menu) => (
    <div className={classes.menuCatDetls}>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        {menu.icon}
      </IconContext.Provider>
      <ul className={classes.menuList}>
        <li>{menu.item}</li>
      </ul>
    </div>
  ));
  return (
    <section className={classes.categories}>
      <h2 className={classes.heading}>Menu Categories</h2>
      <p className={classes.subHeading}>
        Wide variety of tasty menus to choose from{" "}
      </p>
      <IconContext.Provider value={{ size: "2rem", padding: "10px" }}>
        <BsChevronLeft className={classes.chevLeft} />
        <BsChevronRight />
      </IconContext.Provider>
      <section className={classes.menuSec}>{menus}</section>
    </section>
  );
}

export default MenuCat;
