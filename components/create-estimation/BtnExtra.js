import React, { useState } from "react";
import AddExtra from "./AddExtra";
const BtnExtra = () => {
  const [value, setValue] = useState([]);
  const addExtra = (newExtra) => {
    console.log(newExtra);
    setValue([...value, newExtra]);
    console.log(value);
  };
  return (
    <>
      {value &&
        value.map(() => {
          return <AddExtra />;
        })}
      <button
        className="btn btnBlue"
        type="button"
        onClick={(e) => addExtra("a")}
      >
        Ajouter un extra
      </button>
    </>
  );
};
export default BtnExtra;
