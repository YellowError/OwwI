import React from "react";

const ButtonAction = ({ src, nameBtn, onLogout }) => {
  return (
    <>
      <button onClick={onLogout}>
        <img src={src} alt={nameBtn} />
        <span>{nameBtn}</span>
      </button>
    </>
  );
};

export default ButtonAction;
