import React from "react";
import CommentArea from "../CommentArea";
import FloatingInput from "../for-all-form/FloatingInput";
const EstimationCoordinate = ({ hidden }) => {
  return (
    <>
      <div className={`${hidden} container mx-auto`}>
        <h2>Coordonnées du bien immobilier</h2>
        <FloatingInput
          type="texte"
          label="rue"
          htmlForAndId="street"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="N°"
          htmlForAndId="number"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="Bte"
          htmlForAndId="box"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="Code postale"
          htmlForAndId="zipCode"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="Ville"
          htmlForAndId="city"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="Province"
          htmlForAndId="state"
          isRequired={true}
        />
        <FloatingInput
          type="texte"
          label="Pays"
          htmlForAndId="country"
          isRequired={true}
        />
        <CommentArea label="votre commentaire" forId="comment" />
      </div>
    </>
  );
};
export default EstimationCoordinate;
