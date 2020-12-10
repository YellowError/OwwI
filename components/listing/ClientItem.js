import React, { useState } from 'react'
import Link from 'next/link'
import CreateButton from './CreateButton';

function ClientItem({ client }) {
    const [showList, setShowList] = useState(false);

    function listOfEstimations(){
        return client.estimations.map(estimation => {
            return <li key={estimation.id} className='mb-2 bg-gray-200 text-center w-3/4 mx-auto'><Link href={`/details-estimation/${estimation.id}`}>{estimation.nom}</Link></li>
        })
    }
    
    return (
        <div>
            {console.log("RENDER COMPONENT Client")}
            <div className='w-full flex justify-between text-blue-300'>
                <button onClick={()=>{setShowList(!showList)}}>V</button>
                <p>{client.nom}</p>
                <CreateButton cible={`/profile/${client.id}`}>O</CreateButton>
            </div>
            <ul>
                {showList && listOfEstimations()}
            </ul>
            {showList && <CreateButton cible={`/create-estimation/${client.id}`}>+ estimations</CreateButton>}
        </div>
    )
}

export default ClientItem
