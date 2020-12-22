import React from "react";
import Link from "next/link";
import SvgsMenu from "../components/SvgsMenu";

function MainButton({
  title = "",
  svg = "",
  logic = "",
  link = "",
  style = "transform scale-125 ",
}) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a
            onClick={logic}
            className={(style, "relative flex justify-center")}
          >
            <div className="absolute w-full p-2 rounded-lg shadow-md bg-white topNegative">
              <SvgsMenu choice={svg} />
              <p className="text-center">{title}</p>
            </div>
          </a>
        </Link>
      ) : (
        <a onClick={logic} className={(style, "relative flex justify-center")}>
          <div className="absolute w-full p-2 rounded-lg shadow-md bg-white topNegative">
            <SvgsMenu choice={svg} />
            <p className="text-center">{title}</p>
          </div>
        </a>
      )}
    </>
  );
}

export default MainButton;
