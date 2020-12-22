import React from "react";

const InfosAgent = ({ agent }) => {
  return (
    <div className="blockGlobal flex justify-center items-center">
      {agent.img ? (
        <img className="imgAgent" src="${agent.img}" alt="${agent.firstname}" />
      ) : (
        <img className="imgAgent" src="./../images/little_logo_owwi.svg" />
      )}

      {agent ? (
        <div>
          <p>
            <span className="titleGreen">Votre agent: </span>
            {agent.firstname} {agent.lastname}
          </p>
          <p>
            <span className="titleGreen">E-mail: </span> {agent.mail}
          </p>
          <p>
            <span className="titleGreen">Tel: </span> {agent.tel}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfosAgent;
