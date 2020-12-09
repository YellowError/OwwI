import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

const InputSwitch = ({ label, idfor }) => {
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <label htmlFor={idfor}>{label}</label>
        <input
          checked={value}
          className="inputCheckBoxBtn"
          id={idfor}
          type="checkbox"
          onChange={() => setValue(!value)}
        />
        <label
          className={
            value ? "inputSwitchLabel switchFalse" : "inputSwitchLabel"
          }
          htmlFor={idfor}
        >
          <span className="switchBtn" />
        </label>
      </div>
      {value ? (
        <FloatingInput
          type="texte"
          label="Estimation en €"
          htmlForAndId="prix"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default InputSwitch;
