import React from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../assets/burger-promo.png";
import chefImg from "../../assets/chef.png";
import { MdOutlineRestaurantMenu, MdPlayCircleOutline } from "react-icons/md";

function Hero() {
  return (
    <>
      <section className={classes.row}>
        <div className={classes.column}>
          <div className={classes.heading}>
            <h1>
              Order your{" "}
              <span className={classes.headingColor}>favourite food</span> & get
              it <span className={classes.headingColor}>delivered </span>swiftly
            </h1>
            <div className={classes.subHeading}>
              <img
                src={chefImg}
                alt="chefImg"
                className={classes.headingChefImg}
              />
              <p>When you are too lazy to cook, we are just a click away!</p>
            </div>
          </div>
          <div className={classes.btn}>
            <button className={classes.btnFood}>
              <MdOutlineRestaurantMenu />
              Find Food
            </button>
            <button className={classes.btnOrder}>
              <MdPlayCircleOutline />
              How to order
            </button>
          </div>
        </div>
        <div className={classes.column}>
          <div>
            <img src={HeroImg} alt="heroImg" className={classes.heroImg} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
