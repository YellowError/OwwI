import React, { useState } from "react";

const PaginationEsti = () => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <nav className="pageesti">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li>
            <a href="#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationEsti;
