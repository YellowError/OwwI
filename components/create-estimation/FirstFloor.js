import React, { useState } from "react";
import NewRoomInside from "./NewRoomInside";
const FirstFloor = () => {
  const [showFloor, setShowFloor] = useState(false);
  return (
    <>
      <li className="border m-4 p-2">
        <span
          className="mx-2 p-2"
          onClick={() => {
            setShowFloor(!showFloor);
          }}
        >
          Rez-de-chaussée
        </span>
        {showFloor ? (
          <ul className="mt-2">
            <NewRoomInside />
            <li>
              <button type="button" className="btn btnBlue">
                Ajouter une nouvelle pièce
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};
export default FirstFloor;
