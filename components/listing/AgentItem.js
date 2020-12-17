import React, { useState } from "react";
import ClientItem from "./ClientItem";
import CreateButton from "./CreateButton";
import OpenCloseChevron from "../for-all-form/OpenCloseChevron";
import Pagination from "./Pagination";

function AgentItem({ agent }) {
  const [showList, setShowList] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(1);
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastUser - userPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function listOfClients(agent) {
    return agent.clients
      .slice(indexOfFirstPost, indexOfLastUser)
      .map((client) => {
        return (
          <li
            key={client.id}
            className="m-4 textColorBlue bold borderUnderDropdownListing rounded-md mb-4"
          >
            <ClientItem client={client} />
          </li>
        );
      });
  }

  return (
    <>
      <div
        className="flex justify-between w-full"
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <button>
          <OpenCloseChevron showList={showList} />
        </button>
        <p className="text-left textColorBlue font-bold w-3/12">{agent.nom}</p>
        <p className="hidden md:block">Client(s): {agent.clients.length}</p>
        <CreateButton
          cible={`/profile/${agent.id}`}
          style={"underline mr-2 textColorBlue"}
        >
          Voir profil
        </CreateButton>
      </div>
      <ul>{showList && listOfClients(agent)}</ul>
      {showList && (
        <>
          <div className="flex flex-col justify-center md:flex-row-reverse items-center md:justify-between">
            <CreateButton
              cible={`create-client/${agent.id}`}
              style={
                "btnBlue rounded-full m-2 ml-4 w-40 pl-2 pr-4 py-2 text-white flex justify-between"
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
                      <ellipse cx="-3.88" cy="-0.001" rx="3.879" ry="3.88" />
                    </g>
                  </g>
                </g>
              </svg>{" "}
              Ajouter Client
            </CreateButton>
            <Pagination
              userPerPage={userPerPage}
              paginate={paginate}
              totalUsers={agent.clients.length}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </>
  );
}

export default AgentItem;
