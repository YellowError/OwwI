import React, { useState } from "react";
import {
  Orientation,
  SubTypePieceExterne,
  TypePieceExterne,
} from "../../common/immobilier";
import CommentArea from "../CommentArea";
import DropDownMenu from "../DropDownMenu";
import DropSimple from "../DropSimple";
import FloatingInput from "../for-all-form/FloatingInput";
import InputSurface from "../for-all-form/InputSurface";
import OpenCloseChevronForm from "../for-all-form/OpenCloseChevronForm";
import RangeEstimation from "./RangeEstimation";
const NewRoomOutside = () => {
  const [showRoom, setShowRoom] = useState(false);
  return (
    <>
      <li
        className={`${
          showRoom ? "listClose listOpen" : "listClose"
        } m-4 bg-white`}
      >
        <div
          className={`
          ${showRoom ? "titleList titleListOpen" : "titleList"}
            flex justify-between items-center py-1 px-4
        `}
          onClick={() => {
            setShowRoom(!showRoom);
          }}
        >
          <span className="p-2">Nouvelle pièce</span>
          <OpenCloseChevronForm showList={showRoom} />
        </div>

        {showRoom ? (
          <ul className="mx-4 px-2">
            <li>
              <div>
                <span>Type :</span>
                <DropDownMenu table={TypePieceExterne} id="typeOutside1" />
                <span>Options :</span>
                <DropDownMenu
                  table={SubTypePieceExterne}
                  id="subTypeOutside1"
                />

                <InputSurface placeholder="surface" idfor="areaOutside1" />
                <span>Orientation du jardin:</span>
                <DropDownMenu table={Orientation} id="orientationOutside" />
                <RangeEstimation label="finition" idFor="finishOutside1" />
                <CommentArea
                  label="Votre commentaire"
                  forId="commentOutside1"
                />
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
    </>
  );
};
export default NewRoomOutside;
