import React from 'react'

function FilterButton({children, setNeedListAgents}) {
    return (
        <button onClick={setNeedListAgents} className='bg-blue-400 px-4 px-2'>{children}</button>
    )
}

export default FilterButton
