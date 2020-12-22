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

const EnergyEstimation = ({ estimation }) => {
  return (
    <div className="blockGlobal">
      <h2>Energie</h2>
      <ul className="listDetailEstimation">
        <li>
          <span>Type d'énergie</span>
          <span>{Chauffage[estimation.energy.heating]}</span>
        </li>
        {estimation.consumption != 0 ? (
          <li>
            <span>Consommation En.</span>
            <span>{estimation.consumption}Kw/m²</span>
          </li>
        ) : (
          ""
        )}
        <li>
          <span>Classe énergétique</span>
          <span>{EnergyCategory[estimation.energy.class]}</span>
        </li>

        <li>
          <span>N° rapport PEB</span>
          {estimation.energy.pebNumber != "" ? (
            <span>{estimation.energy.pebNumber}</span>
          ) : (
            <span>--</span>
          )}
        </li>

        <li>
          <span>Emission CO²</span>
          {estimation.energy.co2 != 0 ? (
            <span>{estimation.energy.co2}</span>
          ) : (
            <span>--</span>
          )}
        </li>

        <li>
          <span>Chauffe-eau</span>
          <span>{ChauffeEau[estimation.energy.waterHeater]}</span>
        </li>
        <li>
          <span>Chauffage</span>
          <span>{Chauffage[estimation.energy.heating]}</span>
        </li>
        <li>
          <span>Châssis</span>
          <span>{FramingType[estimation.energy.framing]}</span>
        </li>
        <li>
          <span>Vitrage</span>
          <span>{Vitrage[estimation.energy.vitrage]}</span>
        </li>
        <li>
          <span>isolation</span>
          <span>{Insulation[estimation.energy.insulation]}</span>
        </li>

        <li>
          <span>Panneaux solaire</span>
          <span>
            {estimation.energy.solarPanel ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Chauffage solaire</span>
          <span>
            {estimation.energy.solarHeating ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>
      </ul>
      <>
        <p>Commentaire de votre agent:</p>
        <p className="comment">
          {estimation.energy.comment != ""
            ? estimation.energy.comment
            : "pas de commentaire"}
        </p>
      </>
    </div>
  );
};

export default EnergyEstimation;
