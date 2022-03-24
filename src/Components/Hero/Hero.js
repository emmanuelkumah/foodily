import React from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../assets/burger-promo.png";
import chefImg from "../../assets/chef.png";
import { MdOutlineRestaurantMenu, MdPlayCircleOutline } from "react-icons/md";

function Hero() {
  return (
    <>
      <section className={classes.row}>
        <section className={classes.column}>
          <h1 className={classes.headline}>
            Fastest <span className={classes.headlineSpn}>Delivery</span> &{" "}
            <span className={classes.headlineSpn}>Easy Pick Up</span>
          </h1>
          <div className={classes.subHedlinDesc}>
            <div className={classes.subText}>
              <img src={chefImg} alt="chef" className={classes.imgChef} />
              <p>When you are too lazy to cook, we are just a click away!</p>
            </div>
            <div>
              <button className={classes.btnRest}>
                <MdOutlineRestaurantMenu />
                Find Restaurant
              </button>
              <button className={classes.btnOrder}>
                <MdPlayCircleOutline />
                How To Order
              </button>
            </div>
          </div>
        </section>
        <section className={classes.column}>
          <div className={classes.imgSec}>
            <img src={HeroImg} alt="heroImage" className={classes.heroImg} />
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
