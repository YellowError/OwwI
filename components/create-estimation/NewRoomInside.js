import React, { useState } from "react";
import CommentArea from "../CommentArea";
import DropDownMenu from "../DropDownMenu";
import InputSurface from "../for-all-form/InputSurface";
import OpenCloseChevronForm from "../for-all-form/OpenCloseChevronForm";
import RangeEstimation from "./RangeEstimation";
import { InsideFlooring, InsidePieceType } from "../../common/immobilier";
const NewRoomInside = () => {
  const [showRoom, setShowRoom] = useState(false);
  return (
    <ul>
      <li className={`${showRoom ? "listClose listOpen" : "listClose"} m-4`}>
        <div
          className={`
                ${showRoom ? "titleList titleListOpen" : "titleList"}
                  flex justify-between items-center py-1 px-4
              `}
          onClick={() => {
            setShowRoom(!showRoom);
          }}
        >
          <span className="mx-2 p-2">Nouvelle pièce</span>
          <OpenCloseChevronForm showList={showRoom} />
        </div>
        {showRoom ? (
          <ul className="mx-4 px-2">
            <li>
              <div>
                <DropDownMenu table={InsidePieceType} id="typeInside1" />
                <InputSurface placeholder="surface" idfor="areaInside1" />
                <RangeEstimation label="finition" idFor="finishInisde1" />
                <DropDownMenu table={InsideFlooring} id="flooring1" />
                <CommentArea label="Votre commentaire" forId="commentInside1" />
                <div className="flex justify-between">
                  <button type="button" className="btn btnRed">
                    Supprimer
                  </button>
                  <button type="button" className="btn btnGreen">
                    Valider
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};
export default NewRoomInside;
