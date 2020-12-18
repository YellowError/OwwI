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

const InstallationEstimation = ({ estimation }) => {
  return (
    <div className="block">
      <h2>Installations</h2>
      <ul className="listDetailEstimation">
        <li>
          <span>Ascenseur</span>
          <span>
            {estimation.lift ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Accés handicapé</span>
          <span>
            {estimation.disabledAccess ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>
        <li>
          <span>Piscine</span>
          <span>
            {estimation.swimmingPool ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Porte renforcée</span>
          <span>
            {estimation.reinforcedDoor ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Parlophone</span>
          <span>
            {estimation.parlophone ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Terrasse commune</span>
          <span>
            {estimation.sharedTerrace ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Collector d'eau</span>
          <span>
            {estimation.rainwaterCollector ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>

        <li>
          <span>Puit</span>
          <span>
            {estimation.well ? (
              <img src="./../images/true.svg" />
            ) : (
              <img src="./../images/false.svg" />
            )}
          </span>
        </li>
        {estimation.otherInstallation != "" ? (
          <li>
            <span>{estimation.otherInstallation}</span>
            <span>
              <img src="./../images/true.svg" />
            </span>
          </li>
        ) : (
          ""
        )}
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

export default InstallationEstimation;
