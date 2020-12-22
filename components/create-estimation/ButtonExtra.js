import React, { useState } from "react";
import AddExtra from "./AddExtra";
const ButtonExtra = () => {
  const [value, setValue] = useState([]);
  const addExtra = (newExtra) => {
    console.log(newExtra);
    setValue([...value, newExtra]);
  };
  return (
    <>
      {value &&
        value.map((extra, index) => {
          return <AddExtra index={index} key={index} />;
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
export default ButtonExtra;
