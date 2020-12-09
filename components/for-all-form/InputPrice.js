import React from "react";
const InputPrice = ({ idfor, label }) => {
  return (
    <div className="w-full">
      <label
        className="euroSymbol flex items-center justify-between"
        htmlFor={idfor}
      >
        {label}
        <input name={idfor} type="texte" className="inputPrices" />
      </label>
    </div>
  );
};
export default InputPrice;
