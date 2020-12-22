import Layout from "../components/Layout";
import CreateButton from "../components/listing/CreateButton";
import FilterButton from "../components/listing/FilterButton";
import AgentItem from "../components/listing/AgentItem";
import ClientItem from "../components/listing/ClientItem";
import { useState, useEffect } from "react";
import FilterBy from "../components/listing/FilterBy";
import Pagination from "../components/listing/Pagination";
import NumberPerPage from "../components/listing/NumberPerPage";
import UserRole from "../common/user";
import Position from "../common/Position";
import MenuMobile from "../components/MenuMobile";

export default function ListingPage({ user, onLogout }) {
  const [agents, setAgents] = useState([]);
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, toggleLoading] = useState(true);
  const [needListAgents, setNeedListAgents] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  // UserPerPage choisi le nombre d'utilisateur afficher par page (modifiable via useState)
  const [userPerPage, setUserPerPage] = useState(20);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastUser - userPerPage;
  const mainButton = {
    link: "create-estimation/15",
    svg: "createEstimation",
    style: "",
    logic: () => {},
  };
  const buttons = [
    {
      title: "createAgent",
      position: Position.Left,
      cible: "/create-agent",
    },
    {
      title: "createClient",
      position: Position.Right,
      cible: "/create-client/2",
    },
    { title: "/logOut", position: Position.Right, cible: "dashboard" },
  ];
  const optionsSort = [
    "Trier par",
    "Ordre alphabétique (A - z)",
    "Ordre alphabétique (Z - a)",
    // "Nbr de clients décroissant",
    // "Nbr de clients croissant",
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

      // case "Nbr de clients décroissant":
      //   setAgents([...agents.sort(plusClient)]);
      //   break;

      // case "Nbr de clients croissant":
      //   setAgents([...agents.sort(moinsClient)]);
      //   break;

      default:
        break;
    }
  }, [sortSelected]);

  function alphabetique(userPrev, userNext) {
    const namePrev = userPrev.lastName.toUpperCase();
    const nameNext = userNext.lastName.toUpperCase();

    let comparaison = 0;
    if (namePrev > nameNext) {
      comparaison = 1;
    } else if (namePrev < nameNext) {
      comparaison = -1;
    }
    return comparaison;
  }

  function inverse(userPrev, userNext) {
    const namePrev = userPrev.lastName.toUpperCase();
    const nameNext = userNext.lastName.toUpperCase();

    let comparaison = 0;
    if (namePrev > nameNext) {
      comparaison = 1;
    } else if (namePrev < nameNext) {
      comparaison = -1;
    }
    return comparaison * -1;
  }

  // function plusClient(userPrev, userNext) {
  //   const nbPrev = userPrev.clients.length;
  //   const nbNext = userNext.clients.length;

  //   let comparaison = 0;
  //   if (nbPrev > nbNext) {
  //     comparaison = 1;
  //   } else if (nbPrev < nbNext) {
  //     comparaison = -1;
  //   }
  //   return comparaison * -1;
  // }

  // function moinsClient(userPrev, userNext) {
  //   const nbPrev = userPrev.clients.length;
  //   const nbNext = userNext.clients.length;

  //   let comparaison = 0;
  //   if (nbPrev > nbNext) {
  //     comparaison = 1;
  //   } else if (nbPrev < nbNext) {
  //     comparaison = -1;
  //   }
  //   return comparaison;
  // }

  async function findSpecificUsers(typeOfUser) {
    try {
      const token = localStorage.getItem("req-token");
      let response = await fetch(
        `https://techno-api.azurewebsites.net/api/authorization/get-users?role=${typeOfUser}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // let decrypte = typeOfUser === UserRole.client? "clients" : "agents"
      // let response = await fetch(`http://localhost:3001/${decrypte}`);

      if (!response.ok) {
        // bad request
        onLogout();
        throw new Error(await response.text());
      } else {
        // good request
        var responseJson = await response.json();
        console.log(responseJson.applicationUsers);
        const applicationUser = responseJson.applicationUsers;
        if (typeOfUser === UserRole.confirmedAgent)
          setAgents([...applicationUser]);
        else setClients([...applicationUser]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function findAllUsers() {
    await findSpecificUsers(UserRole.client);
    await findSpecificUsers(UserRole.confirmedAgent);
  }

  function listOfUsers(typeOfUser) {
    if (typeOfUser === "agents") {
      return agents.slice(indexOfFirstPost, indexOfLastUser).map((agent) => {
        return (
          <li
            key={agent.id}
            className="my-1 borderUnderDropdownListing rounded-md bckLightBlue py-3 m-4 textColorBlue "
          >
            <AgentItem
              onLogout={onLogout}
              agent={agent}
              clients={clients}
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
            <ClientItem client={client} onLogOut={onLogout} />
          </li>
        );
      });
    }
  }

  function handleInputChange(e) {
    let input = e.target.value;
    let result;

    setSearch(input);

    if (input.length > 0) {
      const role = needListAgents ? agents : clients;
      result = role.filter((user) => {
        let name = user.lastName.toLowerCase();
        if (name.includes(input.toLowerCase())) {
          return user;
        }
      });

      if (result.length != 0) {
        needListAgents ? setAgents([...result]) : setClients([...result]);
      } else {
        needListAgents ? setAgents([]) : setClients([]);
      }
    }

    if (!input.length) {
      needListAgents
        ? findAllUsers(UserRole.confirmedAgent)
        : findAllUsers(UserRole.client);
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
                needListAgents={needListAgents}
              >
                Agents
              </FilterButton>
              <FilterButton
                setNeedListAgents={() => {
                  setNeedListAgents(false);
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
        <div className="w-full">
          <MenuMobile mainButton={mainButton} buttons={buttons} />
        </div>
      </section>
    </Layout>
  );
}
