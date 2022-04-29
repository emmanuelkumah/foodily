import React, { useContext } from "react";
import Form from "../MealsFormInput/Form";
import classes from "./SingleMeal.module.css";
import CartContext from "../../store/cartContext";

function SingleMeal({ id, name, img, amt, desc }) {
  const cartContext = useContext(CartContext);

  const addItemToCart = (qnty) => {
    cartContext.addItem({
      id: id,
      name: name,
      img: img,
      amt: amt,
      qnty: qnty,
    });
  };
  return (
    <div className={`${classes.cardItem} ${classes["hvr-grow"]}`}>
      <li>
        <div>
          <div className={classes["cardItem--cover"]}>
            <img src={img} alt="mealCover" />
          </div>
          <div className={classes["cardItem--content"]}>
            <h3>{name}</h3>
            <p>{`${desc.slice(0, 120)} ...`}</p>
            <p className={classes["cardItem--amt"]}>{`₵ ${amt}`}</p>
          </div>
        </div>
        <Form id={id} addItemToCart={addItemToCart} />
      </li>
    </div>
  );
}

export default SingleMeal;
