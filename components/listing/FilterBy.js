import React from "react";

function FilterBy({ options, setSort }) {

    function handleChange(e){
        setSort(e.target.value);
    }
    return (
        <select name='filter' onChange={handleChange} id='filter-select' className="inputList">
            {options.map((option,index) => {
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    )
}

export default FilterBy;
