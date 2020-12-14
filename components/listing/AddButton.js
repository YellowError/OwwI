import Link from "next/link";
import React from "react";

function AddButton({ children, target }) {
  return (
    <Link href={target}>
      <a className="">{children}</a>
    </Link>
  );
}

export default AddButton;
