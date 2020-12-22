import React from "react";
import AddFloor from "./AddFloor";
import FirstFloor from "./FirstFloor";
const EstimationRoomInside = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Pièces intérieures</h2>
      <ul>
        <FirstFloor />
        <AddFloor />
        <button className="btn btnBlue">Ajouter un étage</button>
      </ul>
    </div>
  );
};
export default EstimationRoomInside;
