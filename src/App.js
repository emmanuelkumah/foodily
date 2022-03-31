import React from "react";
import Hero from "./Components/Hero/Hero";
import MealsCat from "./Components/MealsCategories/MealsCat";
import MealsDelivery from "./Components/MealsDelivery/MealsDelivery";
import NavBar from "./Components/NavBar/NavBar";
import MainMeals from "./Components/MainMeals/MainMeals";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <MealsCat />
        <MainMeals />
      </main>
      <footer>
        <MealsDelivery />
        <Footer />
      </footer>
    </>
  );
}

export default App;
