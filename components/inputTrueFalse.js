import React, { useState } from "react";

const InputTrueFalse = ({ name, label }) => {
  let [isChecked, setIsChecked] = useState(false);

  function onChangeValue(e) {
    if (e === "yes") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  return (
    <div className="inputTrueFalse">
      <div onChange={(e) => onChangeValue(e.target.id)}>
        <label>{label}</label>
        <input type="radio" id="yes" name={name} value="yes" />
        <label htmlFor="yes">Oui</label>
        <input type="radio" id="no" name={name} value="no" />
        <label htmlFor="no">Non</label>
        {isChecked ? (
          <input type="text" className="inputPrice" name={`price${name}`} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InputTrueFalse;
