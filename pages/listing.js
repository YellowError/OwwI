import Layout from '../components/Layout'
import CreateButton from "../components/listing/CreateButton"
import FilterButton from '../components/listing/FilterButton'
import AgentItem from '../components/listing/AgentItem'
import ClientItem from '../components/listing/ClientItem'
import { useState, useEffect, useLayoutEffect } from "react"
import FilterBy from '../components/listing/FilterBy'

export default function ListingPage({ user }) {

  const [agents, setAgents] = useState([]);
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, toggleLoading] = useState(true);
  const [needListAgents, setNeedListAgents] = useState(true); 
  const optionsSort = ["Tier par", "alphabetique", "inverse", "+ de clients", "- de clients"];
  const [sortSelected, setSortSelected] = useState();
  const pageTitle = "listing";

  
  useEffect(async () => {
    await findAllUsers();
    toggleLoading(false);
  }, [])

  useEffect(() => {
    switch (sortSelected) {
      case "alphabetique":
        setAgents([...agents.sort(alphabetique)]);
        setClients([...clients.sort(alphabetique)]);
        break;

      case "inverse":
        setAgents([...agents.sort(inverse)]);
        setClients([...clients.sort(inverse)]);
        break;

      case "+ de clients":
        setAgents([...agents.sort(plusClient)])
        break;

      case "- de clients":
        setAgents([...agents.sort(moinsClient)])

        break;

      default:
        break;
    }
  }, [sortSelected])
  
  function alphabetique(userPrev, userNext){
    const namePrev = userPrev.nom.toUpperCase();
    const nameNext = userNext.nom.toUpperCase();

    let comparaison = 0;
    if(namePrev > nameNext){
      comparaison = 1;
    }
    else if( namePrev < nameNext){
      comparaison = -1;
    }
    return comparaison;
  }

  function inverse(userPrev, userNext){
    const namePrev = userPrev.nom.toUpperCase();
    const nameNext = userNext.nom.toUpperCase();

    let comparaison = 0;
    if(namePrev > nameNext){
      comparaison = 1;
    }
    else if( namePrev < nameNext){
      comparaison = -1;
    }
    return comparaison * -1;
  }

  function plusClient(userPrev, userNext){
    const nbPrev = userPrev.clients.length;
    const nbNext = userNext.clients.length;

    let comparaison = 0;
    if(nbPrev > nbNext){
      comparaison = 1;
    }
    else if( nbPrev < nbNext){
      comparaison = -1;
    }
    return comparaison * -1;
  }

  function moinsClient(userPrev, userNext){
    const nbPrev = userPrev.clients.length;
    const nbNext = userNext.clients.length;

    let comparaison = 0;
    if(nbPrev > nbNext){
      comparaison = 1;
    }
    else if( nbPrev < nbNext){
      comparaison = -1;
    }
    return comparaison;
  }

  async function findSpecificUsers(typeOfUser) {

    let response = await fetch(`http://localhost:3001/${typeOfUser}`);
    if (response.ok) {
      var responseJson = await response.json();
      if (typeOfUser === "agents")
        setAgents([...responseJson]);
      else
        setClients([...responseJson]);
    } else {
      throw new Error(`fetch failed`);
    }
    // console.log("response", responseJson);
    // console.log("users", users);
  }

  async function findAllUsers() {

    await findSpecificUsers('agents');
    await findSpecificUsers('clients');

  }

  function listOfUsers(typeOfUser) {
    
    // console.log(typeOfUser)
    if (typeOfUser === "agents") {
      return agents.map(agent => {
        return <li key={agent.id} className="my-1 borderUnderDropdownListing rounded-md bckLightBlue py-3 m-4 textColorBlue "><AgentItem agent={agent} /></li>
      })
    }
    else if (typeOfUser === 'clients') {
      return clients.map(client => {
        return <li key={client.id} className='my-1 bg-gray-100'><ClientItem client={client} /></li>
      })
    }
  }

  function handleInputChange(e) {
    let input = e.target.value;
    let result;
    // console.log(input.length);
    setSearch(input);

    if (input.length > 2) {
      const role = needListAgents ? agents : clients
      // console.log('try to find')
      result = role.filter(agent => {
        if (agent.nom.includes(input)) {
          return agent;
        }
      })

      if (result.length != 0) {
        // console.log('setAgent')

        needListAgents ? setAgents([...result]) : setClients([...result]);
      }

    }

    if (!input.length) {
      // console.log('refetch tout')
      needListAgents ? findAllUsers('agents') : findAllUsers('clients')
    }
  }

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section className='mb-4'>
        <input className='bg-gray-200 rounded' placeholder='Rechercher agent ou client' type="text" id="searchAgents" name="searchAgents" value={search} onChange={handleInputChange} />
      </section>
      <section>
        <div>
          <div className='flex mb-4'>
            <FilterButton setNeedListAgents={() => { setNeedListAgents(true) }}>Agents</FilterButton>
            <FilterButton setNeedListAgents={() => { setNeedListAgents(false) }}>Clients</FilterButton>
            <FilterBy options={optionsSort} setSort={setSortSelected} />
          </div>
          <div className='bg-gray-300 w-1/2 px-4 py-4'>
            <ul>
              {
                loading ? (
                  <span>loading</span>
                ) : (
                    needListAgents ? listOfUsers('agents') : listOfUsers('clients')
                  )
              }
            </ul>
            {needListAgents ? <CreateButton cible='/create-agent'>+ agent</CreateButton> : <CreateButton cible='/create-client/25'>+ client</CreateButton>}
          </div>

        </div>
      </section>
    </Layout>
  )
}
