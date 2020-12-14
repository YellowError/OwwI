import React, { useState } from "react";
import Link from "next/link";
import CreateButton from "./CreateButton";
import OpenCloseChevron from "./OpenCloseChevron";

function ClientItem({ client }) {
  const [showList, setShowList] = useState(false);

  function listOfEstimations() {
    return client.estimations.map((estimation) => {
      return (
        <li key={estimation.id} className="rounded-md mx-6 bgBlue py-3 my-1 text-wite text-center">
          <Link href={`/details-estimation/${estimation.id}`}>
            {estimation.nom}
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <div className="w-full flex justify-between textColorBlue py-2 m-1">
        <button
          onClick={() => {
            setShowList(!showList);
          }}
        >
          <OpenCloseChevron showList={showList}/>
        </button>
        <p>{client.nom}</p>
        <CreateButton cible={`/profile/${client.id}`} style={"underline mr-2 textColorBlue"}>
          Voir profil
        </CreateButton>
      </div>
      <ul>{showList && listOfEstimations()}</ul>
      {showList && (
        <CreateButton
          cible={`/create-estimation/${client.id}`}
          style={"btnRed rounded-full m-2 ml-4 w-5/12 pl-2 pr-4 py-2 text-white flex justify-between"}
        >
         <svg  className="addSvgButton p-0" viewBox="0 0 32 32">
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
</svg> Ajouter une estimations
        </CreateButton>
      )}
    </div>
  );
}

export default ClientItem;
