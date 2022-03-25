import React from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
