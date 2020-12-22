import React from "react";
const DropSimple = ({ name, label }) => {
  return (
    <>
      <label name={name}>{label}</label>
      <select id={name} name={name}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>4+</option>
      </select>
    </>
  );
};
export default DropSimple;
