import React from "react";
const RangeEstimation = ({ idFor, label }) => {
  return (
    <>
      <label htmlFor={idFor}>
        {label}
        <div>
          <input
            type="range"
            className="custom-slider custom-slider-bullet my-3"
            id={idFor}
            min="0"
            max="10"
            step="1"
            // list="tickmarks"
          />
          {/* <datalist id="tickmarks">
            <option value="0" label="0" />
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
            <option value="5" />
            <option value="6" />
            <option value="7" />
            <option value="8" />
            <option value="9" />
            <option value="10" label="10" />
          </datalist> */}
        </div>
      </label>
    </>
  );
};
export default RangeEstimation;
