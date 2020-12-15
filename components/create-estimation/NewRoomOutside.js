import React, { useState } from "react";
import CommentArea from "../CommentArea";
import DropSimple from "../DropSimple";
import FloatingInput from "../for-all-form/FloatingInput";
import InputSurface from "../for-all-form/InputSurface";
import RangeEstimation from "./RangeEstimation";
const NewRoomOutside = () => {
  const [showRoom, setShowRoom] = useState(false);
  return (
    <>
      <li className="border m-4 p-2">
        <span
          className="mx-2 p-2"
          onClick={() => {
            setShowRoom(!showRoom);
          }}
        >
          Nouvel pièce
        </span>
        {showRoom ? (
          <ul className="mx-4 px-2">
            <li>
              <div>
                <FloatingInput
                  label="Nom de la pièce"
                  htmlForAndId="NameRoom"
                />
                <InputSurface placeholder="surface" idfor="surface" />
                <RangeEstimation label="finition" idFor="" />
                <DropSimple label="Lorem Ipsum" />
                <CommentArea label="Votre commentaire" idfor="commRoom" />
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
