import React from "react";

const Pagination = ({ userPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalBlocks = 7;

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const hasLeftSpill = currentPage > 2;
  const hasRightSpill = totalPages - currentPage > 1;

  const switchPages = () => {
    if (totalPages > totalBlocks) {
      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          if (currentPage < totalPages) {
            return (
              <>
                <span onClick={() => paginate(currentPage - 1)}>
                  <svg
                    className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                    width="0.4rem"
                    viewBox="0 0 15 25"
                  >
                    <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                      <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                        <g transform="matrix(-1,0,0,1,170.316,684.643)">
                          <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>

                <li
                  key={1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {1}
                  </p>
                </li>
                <span>...</span>
                <li
                  key={currentPage - 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage - 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage - 1}
                  </p>
                </li>
                <li
                  key={currentPage}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center regularLinkActive"
                >
                  <p
                    onClick={() => paginate(currentPage)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage}
                  </p>
                </li>
                <li
                  key={currentPage + 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage + 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage + 1}
                  </p>
                </li>
              </>
            );
          } else {
            return (
              <>
                <span onClick={() => paginate(currentPage - 1)}>
                  <svg
                    className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                    width="0.4rem"
                    viewBox="0 0 15 25"
                  >
                    <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                      <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                        <g transform="matrix(-1,0,0,1,170.316,684.643)">
                          <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <li
                  key={1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {1}
                  </p>
                </li>
                <span>...</span>

                <li
                  key={currentPage - 2}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage - 2)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage - 2}
                  </p>
                </li>
                <li
                  key={currentPage - 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage - 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage - 1}
                  </p>
                </li>
                <li
                  key={currentPage}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center regularLinkActive"
                >
                  <p
                    onClick={() => paginate(currentPage)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage}
                  </p>
                </li>
              </>
            );
          }
        }
        case !hasLeftSpill && hasRightSpill: {
          if (currentPage > 1) {
            return (
              <>
                <li
                  key={currentPage - 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage - 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage - 1}
                  </p>
                </li>
                <li
                  key={currentPage}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center regularLinkActive"
                >
                  <p
                    onClick={() => paginate(currentPage)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage}
                  </p>
                </li>
                <li
                  key={currentPage + 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage + 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage + 1}
                  </p>
                </li>
                <span>...</span>
                <li
                  key={totalPages}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(totalPages)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {totalPages}
                  </p>
                </li>

                <span onClick={() => paginate(currentPage + 1)}>
                  <svg
                    className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                    width="0.4rem"
                    viewBox="0 0 15 25"
                  >
                    <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                      <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                        <g transform="matrix(1,0,0,1,165.39,684.643)">
                          <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </>
            );
          } else {
            return (
              <>
                <li
                  key={currentPage}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center regularLinkActive"
                >
                  <p
                    onClick={() => paginate(currentPage)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage}
                  </p>
                </li>
                <li
                  key={currentPage + 1}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage + 1)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage + 1}
                  </p>
                </li>
                <li
                  key={currentPage + 2}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(currentPage + 2)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {currentPage + 2}
                  </p>
                </li>
                <span>...</span>
                <li
                  key={totalPages}
                  className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
                >
                  <p
                    onClick={() => paginate(totalPages)}
                    href="#"
                    className="p-3 mx-auto cursor-pointer"
                  >
                    {totalPages}
                  </p>
                </li>
                <span onClick={() => paginate(currentPage + 1)}>
                  <svg
                    className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                    width="0.4rem"
                    viewBox="0 0 15 25"
                  >
                    <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                      <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                        <g transform="matrix(1,0,0,1,165.39,684.643)">
                          <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </>
            );
          }
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          return (
            <>
              <span onClick={() => paginate(currentPage - 1)}>
                <svg
                  className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                  width="0.4rem"
                  viewBox="0 0 15 25"
                >
                  <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                    <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                      <g transform="matrix(-1,0,0,1,170.316,684.643)">
                        <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <li
                key="1"
                className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
              >
                <p
                  onClick={() => paginate(1)}
                  href="#"
                  className="p-3 mx-auto cursor-pointer"
                >
                  1
                </p>
              </li>
              <span>...</span>
              <li
                key={currentPage}
                className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center regularLinkActive"
              >
                <p
                  onClick={() => paginate(currentPage)}
                  href="#"
                  className="p-3 mx-auto cursor-pointer"
                >
                  {currentPage}
                </p>
              </li>
              <span>...</span>
              <li
                key={totalPages}
                className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing"
              >
                <p
                  onClick={() => paginate(totalPages)}
                  href="#"
                  className="p-3 mx-auto cursor-pointer"
                >
                  {totalPages}
                </p>
              </li>
              <span onClick={() => paginate(currentPage + 1)}>
                <svg
                  className="svgPagination borderDropdownListing  cursor-pointer rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
                  width="0.4rem"
                  viewBox="0 0 15 25"
                >
                  <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                    <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                      <g transform="matrix(1,0,0,1,165.39,684.643)">
                        <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </>
          );
        }
      }
    }
    return pageNumbers.map((number) => {
      return (
        <li
          key={number}
          className={`${
            number == currentPage ? "regularLinkActive" : ""
          } rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center borderDropdownListing`}
        >
          <p
            onClick={() => paginate(number)}
            href="#"
            className="p-3 mx-auto cursor-pointer"
          >
            {number}
          </p>
        </li>
      );
    });
  };
  return (
    <nav>
      <ul className="flex mt-3">{totalPages > 1 ? switchPages() : ""}</ul>
    </nav>
  );
};

export default Pagination;
