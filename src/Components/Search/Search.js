import React from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";
function Search() {
  return (
    <div className={classes.searchIcon}>
      <FaSearch />
    </div>
  );
}

export default Search;
