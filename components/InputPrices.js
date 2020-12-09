import React from "react";
const InputPrices = ({ idfor, label }) => {
  return (
    <div className="w-full">
      <label className="rate flex items-center justify-between" htmlFor={idfor}>
        {label}
        <input name={idfor} type="texte" className="inputPrices" />
      </label>
    </div>
  );
};
export default InputPrices;
