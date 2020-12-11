import React from "react";

const EstimationPagination = ({ select }) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <nav className="pageEsti">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => {
                select(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className="stepBack"></div>
    </nav>
  );
};

export default EstimationPagination;
