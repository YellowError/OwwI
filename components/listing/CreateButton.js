import React from "react";
import Link from "next/link";

function CreateButton({ children, cible, style }) {
  return (
    <Link href={cible}>
      <a className={style}>{children}</a>
    </Link>
  );
}

export default CreateButton;