import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven, GiHamburger, GiFruitBowl } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";

const mealsCategories = [
  { id: 1, item: "pizza", icon: <FaPizzaSlice /> },
  { id: 2, item: "Fried chicken", icon: <GiChickenOven /> },
  { id: 3, item: "Drinks", icon: <BiDrink /> },
  { id: 4, item: "Salad", icon: <GiFruitBowl /> },
  { id: 5, item: "Burger", icon: <GiHamburger /> },
  { id: 6, item: "Soups", icon: <CgBowl /> },
  { id: 7, item: "Sandwich", icon: <GiHamburger /> },
];
export default mealsCategories;
