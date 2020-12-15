import React, { useState } from "react";
import FloatingInput from "../for-all-form/FloatingInput";
import NewRoomInside from "./NewRoomInside";
const AddFloor = () => {
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
          Nouvel étage
        </span>
        {showFloor ? (
          <ul className="mt-2">
            <li>
              <div>
                <FloatingInput
                  label="Nom de l'étage"
                  htmlForAndId="NameFloor"
                />
                <NewRoomInside />
                <button type="button" className="btn btnBlue">
                  Ajouter une nouvelle pièce
                </button>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};
export default AddFloor;
