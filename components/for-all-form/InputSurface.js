import React from "react";
const InputSurface = ({ idfor, label, placeholder }) => {
  return (
    <div className="w-full">
      <label
        className="surface flex items-center justify-between"
        htmlFor={idfor}
      >
        {label}
        <input
          name={idfor}
          type="texte"
          placeholder={placeholder}
          className="inputSurface"
        />
      </label>
    </div>
  );
};
export default InputSurface;
