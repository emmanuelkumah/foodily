import React from "react";
import Cart from "../Cart/Cart";
import NavMenu from "../NavMenu/NavMenu";
import Search from "../Search/Search";

function NavBar() {
  return (
    <>
      <NavMenu />
      <Cart />
      <Search />
    </>
  );
}

export default NavBar;
