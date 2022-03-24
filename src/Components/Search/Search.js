import React from "react";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
function Search() {
  return (
    <div>
      <IconContext.Provider value={{ color: "white" }}>
        <FaSearch />
      </IconContext.Provider>
    </div>
  );
}

export default Search;
