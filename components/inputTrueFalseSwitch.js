import React, { useState } from "react";

const InputTrueFalseSwitch = ({ name, label }) => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <label>{label}</label>
      <input
        checked={value}
        className="inputCheckBoxBtn"
        id="inputSwitch"
        type="checkbox"
        onChange={() => setValue(!value)}
      />
      <label
        className={value ? "inputSwitchLabel switchFalse" : "inputSwitchLabel"}
        htmlFor="inputSwitch"
      >
        <span className="switchBtn" />
      </label>
      {value ? (
        <input type="text" className="inputPrice" name={`price${name}`} />
      ) : (
        ""
      )}
    </div>
  );
};

export default InputTrueFalseSwitch;
