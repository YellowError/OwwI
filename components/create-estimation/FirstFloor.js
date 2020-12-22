import React, { useState } from "react";
import OpenCloseChevronForm from "../for-all-form/OpenCloseChevronForm";
import NewRoomInside from "./NewRoomInside";
const FirstFloor = () => {
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
          <span className=" p-2">Rez-de-chaussée</span>

          <OpenCloseChevronForm showList={showFloor} />
        </div>
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
