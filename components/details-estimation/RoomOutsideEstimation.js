import React from "react";
import {
  ImmoType,
  ImmoSubType,
  BuildingState,
  Orientation,
  Zoning,
  Decoration,
  InsidePieceType,
  InsideFlooring,
  InsidePieceSubtype,
  TypePieceExterne,
  SubTypePieceExterne,
  OutsideFlooring,
  EnergyCategory,
  ConstructionState,
  ChauffeEau,
  Chauffage,
  FramingType,
  Vitrage,
  Insulation,
  EstimationModifier,
} from "../../common/immobilier";

const RoomOutsideEstimation = ({ estimation }) => {
  return (
    <div className="blockGlobal">
      <h2>Pièces extérieures</h2>

      {estimation.outside.pieces.map((element) => {
        return (
          <>
            <ul className="listDetailEstimation">
              <span className="titleRoom">
                {TypePieceExterne[element.type]}
              </span>
              {element.type == 1 || element.type == 4 ? (
                <li>
                  <span>type</span>
                  <span>{SubTypePieceExterne[element.subType]}</span>
                </li>
              ) : (
                ""
              )}
              <li>
                <span>Surface</span>
                <span>{element.area}m²</span>
              </li>
              <li>
                <span>Orientation</span>
                <span>{Orientation[element.orientation]}</span>
              </li>
              {element.type == 3 ? (
                <li>
                  <span>Revêtement de la terasse</span>
                  <span>{OutsideFlooring[element.flooring]}</span>
                </li>
              ) : (
                ""
              )}
              <li>
                <span>Finition</span>
                <span>{element.finish}/10</span>
              </li>
            </ul>
            <>
              <p>Commentaire de votre agent:</p>
              <p className="comment">
                {estimation.comment != ""
                  ? estimation.comment
                  : "pas de commentaire"}
              </p>
            </>
          </>
        );
      })}
    </div>
  );
};

export default RoomOutsideEstimation;
