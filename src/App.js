import React from "react";
import Hero from "./Components/Hero/Hero";
import MenuCat from "./Components/MenuCat/MenuCat";
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
      </main>
    </>
  );
}

export default App;
