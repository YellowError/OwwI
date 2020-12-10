import React from "react";

const ButtonTitle = ({ name, label }) => {
  return (
    <div className="btnRadio">
      <div>
        <label>{label}</label>
        <input type="radio" id="mr" name={name} value="mr" />
        <label htmlFor="mr">Mr</label>

        <input type="radio" id="mme" name={name} value="mme" />
        <label htmlFor="mme">Mme</label>

        <input type="radio" id="mlle" name={name} value="mlle" />
        <label htmlFor="mlle">Mlle</label>
      </div>
    </div>
  );
};

export default ButtonTitle;
