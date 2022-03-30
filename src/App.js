import React from "react";
import Hero from "./Components/Hero/Hero";
import MenuCat from "./Components/MenuCat/MenuCat";
import MenuDish from "./Components/MenuDishes/MenuDish";
import MenuLoc from "./Components/MenuLocator/MenuLoc";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <MenuCat />
        <MenuDish />
      </main>
      <footer>
        <MenuLoc />
      </footer>
    </>
  );
}

export default App;
