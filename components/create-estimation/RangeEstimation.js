import React, { useState } from "react";

const RangeEstimation = ({ idFor, label }) => {
  const [finition, setFinition] = useState(10);
  function myTest(e) {
    setFinition(e.target.value);
  }
  return (
    <>
      <label htmlFor={idFor}>
        <div className="flex justify-between">
          <span>{label}</span>
          <span>{finition}/10</span>
        </div>
        <input
          type="range"
          className="custom-slider custom-slider-bullet my-3"
          id={idFor}
          name={idFor}
          min="0"
          max="10"
          step="1"
          onChange={myTest}
        />
      </label>
    </>
  );
};
export default RangeEstimation;
