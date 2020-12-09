import React from "react";
import InputPrice from "../for-all-form/InputPrice";
import InputSwitch from "../for-all-form/InputSwitch";
import ButtonExtra from "./ButtonExtra";
import CommentArea from "../CommentArea";
const EstimationPriceModif = () => {
  return (
    <>
      <h2>Modification du prix</h2>
      <InputPrice label="Prix du m²" idfor="prixMetre" />
      <InputPrice
        label="Prix du terrain constructible/m2"
        idfor="prixTerrConst"
      />
      <InputPrice
        label="Prix du terrain non-constructible/m2"
        idfor="prixTerrNonConst"
      />
      <InputPrice label="Prix du m² habitable" idfor="prixMHabitable" />
      <InputPrice label="Prix du m² non-habitable" idfor="prixMNonHabitable" />
      <h3>A refaire ?</h3>
      <InputSwitch label="Chauffage" idfor="prixchauffage" />
      <InputSwitch label="Electricité" idfor="prixelectric" />
      <InputSwitch label="Salle de bain" idfor="prixsdb" />
      <InputSwitch label="Cuisine" idfor="prixcuisine" />
      <ButtonExtra />
      <CommentArea label="votre commentaire" idFor="comStep9" />
    </>
  );
};
export default EstimationPriceModif;
