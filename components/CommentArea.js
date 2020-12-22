import React, { useState } from "react";

const CommentArea = ({ forId, label }) => {
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
      <textarea
        className={isActive ? "inputFull" : ""}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        id={forId}
        name={forId}
      ></textarea>
      <label className={`${isActive ? "full" : ""} md:text-lg`} htmlFor={forId}>
        {label}
      </label>
    </div>
  );
};

export default CommentArea;
