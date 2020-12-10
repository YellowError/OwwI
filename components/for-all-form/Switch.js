import React, { useState } from "react";

const Switch = ({ label, idfor }) => {
  const [value, setValue] = useState(false);

  return (
    <div className="flex items-center justify-between py-3">
      <label htmlFor={idfor}>{label}</label>
      <input
        checked={value}
        className="inputCheckBoxBtn"
        id={idfor}
        type="checkbox"
        onChange={() => setValue(!value)}
      />
      <label
        className={value ? "inputSwitchLabel switchFalse" : "inputSwitchLabel"}
        htmlFor={idfor}
      >
        <span className="switchBtn" />
      </label>
    </div>
  );
};

export default Switch;
