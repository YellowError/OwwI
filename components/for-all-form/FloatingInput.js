import React, { useState } from "react";

const FloatingInput = ({ htmlForAndId, label, type = "text" }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const handleTextChange = (text) => {
    setValue(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="floatLabel">
      <input
        className={isActive ? "inputFull" : ""}
        type={type}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        id={htmlForAndId}
      />
      <label
        className={`${isActive ? "full" : ""} md:text-lg`}
        htmlFor={htmlForAndId}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
