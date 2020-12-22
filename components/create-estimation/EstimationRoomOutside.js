import NewRoomOutside from "../../components/create-estimation/NewRoomOutside";
import React from "react";
const EstimationRoomOutside = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Pièces extérieures</h2>
      <ul>
        <NewRoomOutside />
        <button className="btn btnBlue">Ajouter une pièce</button>
      </ul>
    </div>
  );
};
export default EstimationRoomOutside;
