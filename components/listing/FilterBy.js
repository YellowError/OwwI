import React, { useEffect } from 'react'

function FilterBy({ options }) {

    return (
        <select name='filter' id='filter-select'>
            {options.map((option,index) => {
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    )
}

export default FilterBy
