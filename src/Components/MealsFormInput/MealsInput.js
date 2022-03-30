import React from "react";

function MealsInput({ id }) {
  return (
    <div>
      <form>
        <label htmlFor={id}>Amount</label>
        <input
          id={id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default MealsInput;
