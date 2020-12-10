import React, { useState } from 'react'
import Link from 'next/link'
import ClientItem from "./ClientItem"
import CreateButton from './CreateButton';

function AgentItem({ agent }) {
    const [showList, setShowList] = useState(false);

    function listOfClients(agent){
       return agent.clients.map(client => {
            return <li  key={client.id} className='mb-2 bg-gray-500'><ClientItem client={client} /></li>
        })
    }

    return (
        <>
            {console.log("RENDER COMPONENT Agent")}
            <div className='flex justify-between'>
                <button onClick={()=>{setShowList(!showList)}}>V</button>
                <p>{agent.nom}</p>
                <p>Nbr Client(s): {agent.clients.length}</p>
                <CreateButton cible={`/profile/${agent.id}`}>O</CreateButton>
            </div>
        {/* {showList ? <ul className='block'>{listOfClients()}</ul> : <ul className='hidden'>{listOfClients()}</ul>} */}
            <ul>
                {showList && listOfClients(agent)}
            </ul>
            {showList && <CreateButton cible={`create-client/${agent.id}`}>+ client</CreateButton>}

            
        </>


    )
}

export default AgentItem
