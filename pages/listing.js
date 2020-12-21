import Layout from "../components/Layout";
import CreateButton from "../components/listing/CreateButton";
import FilterButton from "../components/listing/FilterButton";
import AgentItem from "../components/listing/AgentItem";
import ClientItem from "../components/listing/ClientItem";
import { useState, useEffect } from "react";
import FilterBy from "../components/listing/FilterBy";
import Pagination from "../components/listing/Pagination";
import NumberPerPage from "../components/listing/NumberPerPage";

export default function ListingPage({ user }) {
  const [agents, setAgents] = useState([]);
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, toggleLoading] = useState(true);
  const [needListAgents, setNeedListAgents] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  // UserPerPage choisi le nombre d'utilisateur afficher par page (modifiable via useState)
  const [userPerPage, setUserPerPage] = useState(5);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastUser - userPerPage;

  const optionsSort = [
    "Trier par",
    "Ordre alphabétique (A - z)",
    "Ordre alphabétique (Z - a)",
    "Nbr de clients décroissant",
    "Nbr de clients croissant",
  ];
  const [sortSelected, setSortSelected] = useState();
  const pageTitle = "listing";

  useEffect(async () => {
    await findAllUsers();
    toggleLoading(false);
  }, []);

  useEffect(() => {
    switch (sortSelected) {
      case "Ordre alphabétique (A - z)":
        setAgents([...agents.sort(alphabetique)]);
        setClients([...clients.sort(alphabetique)]);
        break;

      case "Ordre alphabétique (Z - a)":
        setAgents([...agents.sort(inverse)]);
        setClients([...clients.sort(inverse)]);
        break;

      case "Nbr de clients décroissant":
        setAgents([...agents.sort(plusClient)]);
        break;

      case "Nbr de clients croissant":
        setAgents([...agents.sort(moinsClient)]);
        break;

      default:
        break;
    }
  }, [sortSelected]);

  function alphabetique(userPrev, userNext) {
    const namePrev = userPrev.nom.toUpperCase();
    const nameNext = userNext.nom.toUpperCase();

    let comparaison = 0;
    if (namePrev > nameNext) {
      comparaison = 1;
    } else if (namePrev < nameNext) {
      comparaison = -1;
    }
    return comparaison;
  }

  function inverse(userPrev, userNext) {
    const namePrev = userPrev.nom.toUpperCase();
    const nameNext = userNext.nom.toUpperCase();

    let comparaison = 0;
    if (namePrev > nameNext) {
      comparaison = 1;
    } else if (namePrev < nameNext) {
      comparaison = -1;
    }
    return comparaison * -1;
  }

  function plusClient(userPrev, userNext) {
    const nbPrev = userPrev.clients.length;
    const nbNext = userNext.clients.length;

    let comparaison = 0;
    if (nbPrev > nbNext) {
      comparaison = 1;
    } else if (nbPrev < nbNext) {
      comparaison = -1;
    }
    return comparaison * -1;
  }

  function moinsClient(userPrev, userNext) {
    const nbPrev = userPrev.clients.length;
    const nbNext = userNext.clients.length;

    let comparaison = 0;
    if (nbPrev > nbNext) {
      comparaison = 1;
    } else if (nbPrev < nbNext) {
      comparaison = -1;
    }
    return comparaison;
  }

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
      return agents.slice(indexOfFirstPost, indexOfLastUser).map((agent) => {
        return (
          <li
            key={agent.id}
            className="my-1 borderUnderDropdownListing rounded-md bckLightBlue py-3 m-4 textColorBlue "
          >
            <AgentItem
              agent={agent}
              userPerPage={userPerPage}
              paginate={(pageNumber) => {
                setCurrentPage(pageNumber);
              }}
              indexOfFirstPost={indexOfFirstPost}
              indexOfLastUser={indexOfLastUser}
            />
          </li>
        );
      });
    } else if (typeOfUser === "clients") {
      return clients.slice(indexOfFirstPost, indexOfLastUser).map((client) => {
        return (
          <li
            key={client.id}
            className="my-1 borderUnderDropdownListing rounded-md m-4 bckLightBlue textColorBlue"
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
      // console.log('try to find')
      result = role.filter((agent) => {
        if (agent.nom.includes(input)) {
          return agent;
        }
      });

      if (result.length != 0) {
        // console.log('setAgent')

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
            <div className="flex flex-col items-center sm:flex-row">
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
            <div className="flex flex-col-reverse items-end">
              <NumberPerPage
                setCurrentPage={setCurrentPage}
                setUserPerPage={setUserPerPage}
                userPerPage={userPerPage}
              />
              <FilterBy
                options={optionsSort}
                setSort={setSortSelected}
                isAgent={needListAgents}
              />
            </div>
          </div>

          <div className="w-full mx-auto lg:w-3/4 px-4 py-4 rounded-md">
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
              <>
                <div className="flex flex-col justify-center md:flex-row-reverse items-center md:justify-between">
                  <CreateButton
                    cible="/create-agent"
                    style={
                      "btnBlue block rounded-full m-2 w-48 pl-2 pr-4 py-2 text-white ml-6 flex justify-between"
                    }
                  >
                    <svg className="addSvgButton p-0" viewBox="0 0 32 32">
                      <g
                        className="strokeWhite"
                        transform="matrix(1,0,0,1,-1058.88,-570.422)"
                      >
                        <g transform="matrix(2.66667,0,0,2.66667,0,0)">
                          <g transform="matrix(1,0,0,1,403.308,220.169)">
                            <path d="M0,-0.612L1.183,-0.612L1.183,-0.103L0,-0.103L0,1.238L-0.541,1.238L-0.541,-0.103L-1.724,-0.103L-1.724,-0.612L-0.541,-0.612L-0.541,-1.85L0,-1.85L0,-0.612Z" />
                          </g>
                        </g>
                        <g
                          className="strokeWhite"
                          transform="matrix(2.66667,0,0,2.66667,0,0)"
                        >
                          <g transform="matrix(0,-1,-1,0,403.036,215.983)">
                            <ellipse
                              cx="-3.88"
                              cy="-0.001"
                              rx="3.879"
                              ry="3.88"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Ajouter un agent
                  </CreateButton>

                  <Pagination
                    userPerPage={userPerPage}
                    totalUsers={agents.length}
                    paginate={(pageNumber) => {
                      setCurrentPage(pageNumber);
                    }}
                    currentPage={currentPage}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center md:flex-row-reverse items-center md:justify-between">
                  <CreateButton
                    cible="/create-client/25"
                    style={
                      "btnBlue block rounded-full m-2 w-48 pl-2 pr-4 py-2 text-white ml-6  flex justify-between"
                    }
                  >
                    <svg className="addSvgButton p-0" viewBox="0 0 32 32">
                      <g
                        className="strokeWhite"
                        transform="matrix(1,0,0,1,-1058.88,-570.422)"
                      >
                        <g transform="matrix(2.66667,0,0,2.66667,0,0)">
                          <g transform="matrix(1,0,0,1,403.308,220.169)">
                            <path d="M0,-0.612L1.183,-0.612L1.183,-0.103L0,-0.103L0,1.238L-0.541,1.238L-0.541,-0.103L-1.724,-0.103L-1.724,-0.612L-0.541,-0.612L-0.541,-1.85L0,-1.85L0,-0.612Z" />
                          </g>
                        </g>
                        <g
                          className="strokeWhite"
                          transform="matrix(2.66667,0,0,2.66667,0,0)"
                        >
                          <g transform="matrix(0,-1,-1,0,403.036,215.983)">
                            <ellipse
                              cx="-3.88"
                              cy="-0.001"
                              rx="3.879"
                              ry="3.88"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Ajouter un client
                  </CreateButton>
                  <Pagination
                    userPerPage={userPerPage}
                    totalUsers={clients.length}
                    paginate={(pageNumber) => {
                      setCurrentPage(pageNumber);
                    }}
                    currentPage={currentPage}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
