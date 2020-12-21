import React from "react";

function FilterBy({ options, setSort, isAgent }) {
  function handleChange(e) {
    setSort(e.target.value);
  }

  return (
    <select
      name="filter"
      onChange={handleChange}
      id="filter-select"
      className="inputList w-52"
      defaultValue={{ label: "Trier par", value: "Trier par" }}
    >
      {isAgent
        ? options.map((option, index) => {
            if (index === 0) {
              return (
                <option hidden key={index} value="">
                  {option}
                </option>
              );
            } else {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            }
          })
        : options.slice(0, 3).map((option, index) => {
            if (index === 0) {
              return (
                <option hidden key={index} value="">
                  {option}
                </option>
              );
            } else {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            }
          })}
    </select>
  );
}

export default FilterBy;
