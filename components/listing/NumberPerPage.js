import React from "react";

const NumberPerPage = ({ setUserPerPage, setCurrentPage, userPerPage }) => {
  const options = [
    {
      label: "1",
      value: "1",
    },
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];
  return (
    <div className="flex mt-2">
      <label htmlFor="numberPerPage">Nbr par page</label>
      <select
        name="numberPerPage"
        id="numberPerPage"
        className="inputList w-18"
        value={userPerPage}
        onChange={(e) => {
          setUserPerPage(e.target.value);
          setCurrentPage(1);
        }}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default NumberPerPage;
