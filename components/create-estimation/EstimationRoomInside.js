import React from "react";
import AddFloor from "./AddFloor";
import FirstFloor from "./FirstFloor";
const EstimationRoomInside = () => {
  return (
    <>
      <h2>Pièces intérieures</h2>
      <ul>
        <FirstFloor />
        <AddFloor />
        <button className="btn btnBlue">Ajouter un étage</button>
      </ul>
    </>
  );
};
export default EstimationRoomInside;
