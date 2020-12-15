import React from "react";

function FilterButton({ children, setNeedListAgents, needListAgents }) {
  return (
    <button
      onClick={setNeedListAgents}
      className={`${
        needListAgents ? "regularLinkActive" : ""
      } regularLinkBorder rounded-full py-2 px-4 mx-2 h-10 hover:underline`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
