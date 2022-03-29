import React from "react";
import menuCategories from "./menuData";
import classes from "./MenuCat.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

function MenuCat() {
  const noItems = 5;
  let catItems = menuCategories.slice(0, noItems);

  const menus = catItems.map((menu) => (
    <div className={classes.lists}>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        {menu.icon}
      </IconContext.Provider>
      <ul>
        <li key={menu.id}>{menu.item}</li>
      </ul>
    </div>
  ));
  //move to next category item
  function nextCatItem() {
    console.log("next item");
    catItems.shift();
    console.log(catItems);
    //push next item
  }

  return (
    <section className={classes.menuCatg}>
      <h2 className={classes.catgHeading}>Menu Categories</h2>
      <p className={classes.catgSubHead}>
        Wide variety of tasty menus to choose from{" "}
      </p>
      <IconContext.Provider value={{ size: "2rem", padding: "10px" }}>
        <BsChevronLeft className={classes.chevLeft} />
        <BsChevronRight onClick={nextCatItem} />
      </IconContext.Provider>
      <section className={classes.catgLists}>{menus}</section>
    </section>
  );
}

export default MenuCat;
