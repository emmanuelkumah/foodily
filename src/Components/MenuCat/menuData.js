import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven, GiHamburger, GiFruitBowl } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";

const menuCategories = [
  { item: "pizza", icon: <FaPizzaSlice /> },
  { item: "Fried chicken", icon: <GiChickenOven /> },
  { item: "Drinks", icon: <BiDrink /> },
  { item: "Salad", icon: <GiFruitBowl /> },
  { item: "Burger", icon: <GiHamburger /> },
  { item: "Soups", icon: <CgBowl /> },
];
export default menuCategories;
