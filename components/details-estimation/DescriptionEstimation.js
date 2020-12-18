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

const DescriptionEstimation = ({ estimation }) => {
  return (
    <div className="block">
      <h2>Description</h2>
      <ul className="listDetailEstimation">
        <li>
          <span>Type d'habitat</span>
          <span>{ImmoSubType[estimation.subType]}</span>
        </li>
        <li>
          <span>Nombre de façades</span>
          <span>{estimation.frontageCount}</span>
        </li>
        {estimation.floorNumber != 0 ? (
          <li>
            <span>Numéro d'étage</span>
            <span>{estimation.floorNumber}</span>
          </li>
        ) : (
          ""
        )}
        <li>
          <span>Superficie totale</span>
          <span>{estimation.totalArea}m²</span>
        </li>
        {estimation.outside.area != 0 ? (
          <li>
            <span>Superficie terrain</span>
            <span>{estimation.inside.nonHabitableArea}m²</span>
          </li>
        ) : (
          ""
        )}
        {estimation.outside.area != 0 ? (
          <li>
            <span>Superficie habitable</span>
            <span>{estimation.inside.habitableArea}m²</span>
          </li>
        ) : (
          ""
        )}
        <li>
          <span>Année de construction</span>
          <span>{estimation.constructionDate}</span>
        </li>
        {estimation.taxe != 0 ? (
          <li>
            <span>Cadastre</span>
            <span>{estimation.taxe}€</span>
          </li>
        ) : (
          ""
        )}
        {estimation.sharedCharges != 0 ? (
          <li>
            <span>Charges communes</span>
            <span>{estimation.sharedCharges}€</span>
          </li>
        ) : (
          ""
        )}
        <li>
          <span>Etat du bâtiment</span>
          <span>{BuildingState[estimation.buildingState]}</span>
        </li>
        {estimation.orientation != 0 ? (
          <li>
            <span>Orientation</span>
            <span>{Orientation[estimation.orientation]}</span>
          </li>
        ) : (
          ""
        )}

        <li>
          <span>Permis de bâtir</span>
          <span>
            {estimation.buildingPermit ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Zone inondable</span>
          <span>
            {estimation.floodZone ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Zone d'habitat</span>
          <span>{Zoning[estimation.zoning]}</span>
        </li>
      </ul>
      <>
        <p>Commentaire de votre agent:</p>
        <p className="comment">
          {estimation.comment != "" ? estimation.comment : "pas de commentaire"}
        </p>
      </>
    </div>
  );
};

export default DescriptionEstimation;
