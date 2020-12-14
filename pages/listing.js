import Layout from "../components/Layout";
import CreateButton from "../components/listing/CreateButton";
import FilterButton from "../components/listing/FilterButton";
import AgentItem from "../components/listing/AgentItem";
import ClientItem from "../components/listing/ClientItem";
import { useState, useEffect } from "react";
import FilterBy from "../components/listing/FilterBy";

export default function ListingPage({ user }) {
  const [agents, setAgents] = useState([]);
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, toggleLoading] = useState(true);
  const [needListAgents, setNeedListAgents] = useState(true);
  const [linkActive, setLinkActive] = useState(false);
  const pageTitle = "listing";

  useEffect(async () => {
    await findAllUsers();
    toggleLoading(false);
  }, []);

  async function findSpecificUsers(typeOfUser) {
    let response = await fetch(`http://localhost:3001/${typeOfUser}`);
    if (response.ok) {
      var responseJson = await response.json();
      if (typeOfUser === "agents") setAgents([...responseJson]);
      else setClients([...responseJson]);
    } else {
      throw new Error(`fetch failed`);
    }
  }

  async function findAllUsers() {
    await findSpecificUsers("agents");
    await findSpecificUsers("clients");
  }
  const isActive = () => {
    setLinkActive(!linkActive);
  };
  function listOfUsers(typeOfUser) {
    if (typeOfUser === "agents") {
      return agents.map((agent) => {
        return (
          <li
            key={agent.id}
            className="my-1 borderUnderDropdownListing rounded-md bckLightBlue py-3 m-4 textColorBlue "
          >
            <AgentItem agent={agent} />
          </li>
        );
      });
    } else if (typeOfUser === "clients") {
      return clients.map((client) => {
        return (
          <li
            key={client.id}
            className="my-1 borderUnderDropdownListing rounded-md m-4 bckLightBlue py-3 textColorBlue"
          >
            <ClientItem client={client} />
          </li>
        );
      });
    }
  }

  function handleInputChange(e) {
    let input = e.target.value;
    let result;

    setSearch(input);

    if (input.length > 2) {
      const role = needListAgents ? agents : clients;

      result = role.filter((agent) => {
        if (agent.nom.includes(input)) {
          return agent;
        }
      });

      if (result.length != 0) {
        needListAgents ? setAgents([...result]) : setClients([...result]);
      }
    }

    if (!input.length) {
      needListAgents ? findAllUsers("agents") : findAllUsers("clients");
    }
  }

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section className="mb-4 mx-auto p-6 ">
        <input
          className="inputSearch"
          placeholder="Rechercher agent ou client"
          type="text"
          id="searchAgents"
          name="searchAgents"
          value={search}
          onChange={handleInputChange}
        />
      </section>
      <section>
        <div>
          <div className="flex mx-auto mb-4 items-center justify-between lg:w-1/2">
            <div>
              <FilterButton
                setNeedListAgents={() => {
                  setNeedListAgents(true);
                }}
                onClick={() => {
                  isActive();
                }}
                needListAgents={needListAgents}
              >
                Agents
              </FilterButton>
              <FilterButton
                setNeedListAgents={() => {
                  setNeedListAgents(false);
                }}
                onClick={() => {
                  isActive();
                }}
                needListAgents={!needListAgents}
              >
                Clients
              </FilterButton>
            </div>

            <FilterBy
              options={[
                "alphabetique",
                "inverse",
                "+ de clients",
                "- de clients",
              ]}
            />
          </div>
          <div className="w-10/12 mx-auto lg:w-3/4 px-4 py-4 rounded-md">
            <ul className="mb-6">
              {loading ? (
                <span>loading</span>
              ) : needListAgents ? (
                listOfUsers("agents")
              ) : (
                listOfUsers("clients")
              )}
            </ul>
            {needListAgents ? (
              <CreateButton cible="/create-agent" style={"btnBlue rounded-full m-2 w-1/4 pl-2 pr-4 py-2 text-white ml-6"}><svg  className="addSvgButton p-0" viewBox="0 0 32 32">
              <g className="strokeWhite" transform="matrix(1,0,0,1,-1058.88,-570.422)">
                  <g transform="matrix(2.66667,0,0,2.66667,0,0)">
                      <g transform="matrix(1,0,0,1,403.308,220.169)">
                          <path d="M0,-0.612L1.183,-0.612L1.183,-0.103L0,-0.103L0,1.238L-0.541,1.238L-0.541,-0.103L-1.724,-0.103L-1.724,-0.612L-0.541,-0.612L-0.541,-1.85L0,-1.85L0,-0.612Z"/>
                      </g>
                  </g>
                  <g className="strokeWhite" transform="matrix(2.66667,0,0,2.66667,0,0)">
                      <g transform="matrix(0,-1,-1,0,403.036,215.983)">
                          <ellipse cx="-3.88" cy="-0.001" rx="3.879" ry="3.88"/>
                      </g>
                  </g>
              </g>
          </svg> Ajouter un agent</CreateButton>
            ) : (
              <CreateButton cible="/create-client/25" style={"btnBlue rounded-full m-2 w-1/4 pl-2 pr-4 py-2 text-white ml-6"}><svg  className="addSvgButton p-0" viewBox="0 0 32 32">
              <g className="strokeWhite" transform="matrix(1,0,0,1,-1058.88,-570.422)">
                  <g transform="matrix(2.66667,0,0,2.66667,0,0)">
                      <g transform="matrix(1,0,0,1,403.308,220.169)">
                          <path d="M0,-0.612L1.183,-0.612L1.183,-0.103L0,-0.103L0,1.238L-0.541,1.238L-0.541,-0.103L-1.724,-0.103L-1.724,-0.612L-0.541,-0.612L-0.541,-1.85L0,-1.85L0,-0.612Z"/>
                      </g>
                  </g>
                  <g className="strokeWhite" transform="matrix(2.66667,0,0,2.66667,0,0)">
                      <g transform="matrix(0,-1,-1,0,403.036,215.983)">
                          <ellipse cx="-3.88" cy="-0.001" rx="3.879" ry="3.88"/>
                      </g>
                  </g>
              </g>
          </svg> Ajouter un client</CreateButton>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
