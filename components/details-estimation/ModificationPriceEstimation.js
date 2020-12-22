import React from "react";
import {
  ImmoType,
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

const ModificationPriceEstimation = ({ estimation }) => {
  return (
    <div className="blockGlobal">
      <h2>Modification du prix</h2>
      <ul className="listDetailEstimation">
        {estimation.extras.map((element) => {
          return (
            <>
              <li>
                <span>{element.name}</span>
                <span className={element.operateur ? "green" : "red"}>
                  {element.operateur ? "+" : "-"} {element.price}€
                </span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ModificationPriceEstimation;
