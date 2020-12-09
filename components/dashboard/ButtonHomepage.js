import React, { useEffect } from "react";
import Link from "next/link";

const ButtonHomepage = ({ children, imgBtn, cheminBtn = "#" }) => {
  useEffect(() => {
    console.log(cheminBtn);
  }, []);
  return (
    <Link href={cheminBtn}>
      <div className="">
        <span>{imgBtn}</span>
        <span className="mx-auto">{children}</span>
      </div>
    </Link>
  );
};
export default ButtonHomepage;
