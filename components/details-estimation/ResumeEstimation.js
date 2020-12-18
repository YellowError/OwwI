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

const ResumeEstimation = ({ estimation }) => {
  return (
    <div className="block">
      <h2>Estimation n° {estimation.id}</h2>
      <span className="typeHabitat">{ImmoType[estimation.type]}</span>
      <p>Adresse:</p>
      <p>
        {estimation.address.number} {estimation.address.street}
      </p>
      <p>
        {estimation.address.zipCode} {estimation.address.city}
      </p>
      <p>{estimation.address.country}</p>
      <br />
      <p>province : {estimation.address.state}</p>
      <p className="priceEstimation">
        Estimaton : (ICI ON MET LE CODE RESULTAT PRIX ESTIMATION) €
      </p>
      <br />
      <>
        <p>Commentaire de votre agent:</p>
        <p className="comment">
          {estimation.address.comment != ""
            ? estimation.address.comment
            : "pas de commentaire"}
        </p>
      </>
    </div>
  );
};

export default ResumeEstimation;
