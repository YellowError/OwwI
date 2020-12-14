import React from "react";

function FilterBy({ options }) {
  return (
    <select name="filter" id="filter-select" className="inputList">
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default FilterBy;
