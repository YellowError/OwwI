import React, { useState } from "react";
import FloatingInput from "../for-all-form/FloatingInput";
import OpenCloseChevronForm from "../for-all-form/OpenCloseChevronForm";
import NewRoomInside from "./NewRoomInside";
const AddFloor = () => {
  const [showFloor, setShowFloor] = useState(false);
  return (
    <>
      <li
        className={`${
          showFloor ? "listClose listOpen" : "listClose"
        } m-4 bg-white`}
      >
        <div
          className={`
                ${showFloor ? "titleList titleListOpen" : "titleList"}
                  flex justify-between items-center py-1 px-4
              `}
          onClick={() => {
            setShowFloor(!showFloor);
          }}
        >
          <span className="p-2">Nouvel étage</span>
          <OpenCloseChevronForm showList={showFloor} />
        </div>
        {showFloor ? (
          <ul className="mt-2">
            <li>
              <div>
                <FloatingInput
                  label="Nom de l'étage"
                  htmlForAndId="nameFloor"
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
