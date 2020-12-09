import React, { useState } from "react";

const CommentaireArea = ({ forId, label }) => {
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
      <textarea
        className={isActive ? "areaFull" : ""}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        id={forId}
      ></textarea>
      <label className={`${isActive ? "full" : ""} md:text-lg`} htmlFor={forId}>
        {label}
      </label>
    </div>
  );
};

export default CommentaireArea;
