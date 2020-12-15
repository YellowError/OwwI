import NewRoomOutside from "../../components/create-estimation/NewRoomOutside";
import React from "react";
const EstimationRoomOutside = () => {
  return (
    <>
      <h2>Pièces extérieures</h2>
      <ul>
        <NewRoomOutside />
        <button className="btn btnBlue">Ajouter une pièce</button>
      </ul>
    </>
  );
};
export default EstimationRoomOutside;
