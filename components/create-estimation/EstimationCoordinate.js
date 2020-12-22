import React from "react";
import CommentArea from "../CommentArea";
import FloatingInput from "../for-all-form/FloatingInput";
const EstimationCoordinate = ({ hidden }) => {
  return (
    <>
      <div className={`${hidden} container mx-auto`}>
        <h2>Coordonnées du bien immobilier</h2>
        <FloatingInput type="texte" label="rue" htmlForAndId="street" />
        <FloatingInput type="texte" label="N°" htmlForAndId="number" />
        <FloatingInput type="texte" label="Bte" htmlForAndId="box" />
        {/* Concatainer number et box Ou delete */}
        <FloatingInput
          type="texte"
          label="Code postale"
          htmlForAndId="zipCode"
        />
        <FloatingInput type="texte" label="Ville" htmlForAndId="city" />
        <FloatingInput type="texte" label="Province" htmlForAndId="state" />
        <FloatingInput type="texte" label="Pays" htmlForAndId="country" />
        <CommentArea label="votre commentaire" forId="comment" />
      </div>
    </>
  );
};
export default EstimationCoordinate;
