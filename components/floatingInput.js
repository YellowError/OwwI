import React, { useState } from "react";

const FloatingInput = ({ label, type = "text" }) => {
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
    <div className="float-label">
      <input
        className={isActive ? "inputFull" : ""}
        type={type}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <label className={`${isActive ? "full" : ""} md:text-lg`} htmlFor="test">
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
