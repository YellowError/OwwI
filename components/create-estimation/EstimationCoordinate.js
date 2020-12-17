import React from "react";
import CommentArea from "../CommentArea";
import FloatingInput from "../for-all-form/FloatingInput";
const EstimationCoordinate = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2>Coordonnées du bien immobilier</h2>
        <FloatingInput
          type="texte"
          label="Adresse physique"
          htmlForAndId="adresse"
        />
        <FloatingInput type="texte" label="N°" htmlForAndId="num" />
        <FloatingInput type="texte" label="Bte" htmlForAndId="boîte" />
        <FloatingInput type="texte" label="Code postale" htmlForAndId="cp" />
        <FloatingInput type="texte" label="Ville" htmlForAndId="ville" />
        <FloatingInput type="texte" label="Province" htmlForAndId="province" />
        <FloatingInput type="texte" label="Pays" htmlForAndId="pays" />
        <CommentArea label="votre commentaire" idFor="comStep2" />
      </div>
    </>
  );
};
export default EstimationCoordinate;
