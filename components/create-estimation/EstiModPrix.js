import React from "react";
import InputPrices from "../InputPrices";
import InputTrueFalseSwitch from "../inputTrueFalseSwitch";
import BtnExtra from "./BtnExtra";
import CommentaireArea from "../CommentaireArea";
const EstiModPrix = () => {
  return (
    <>
      <h2>Modification du prix</h2>
      <InputPrices label="Prix du m²" idfor="prixMetre" />
      <InputPrices
        label="Prix du terrain constructible/m2"
        idfor="prixTerrConst"
      />
      <InputPrices
        label="Prix du terrain non-constructible/m2"
        idfor="prixTerrNonConst"
      />
      <InputPrices label="Prix du m² habitable" idfor="prixMHabitable" />
      <InputPrices label="Prix du m² non-habitable" idfor="prixMNonHabitable" />
      <h3>A refaire ?</h3>
      <InputTrueFalseSwitch label="Chauffage" idfor="prixchauffage" />
      <InputTrueFalseSwitch label="Electricité" idfor="prixelectric" />
      <InputTrueFalseSwitch label="Salle de bain" idfor="prixsdb" />
      <InputTrueFalseSwitch label="Cuisine" idfor="prixcuisine" />
      <BtnExtra />
      <CommentaireArea label="votre commentaire" idFor="comStep9" />
    </>
  );
};
export default EstiModPrix;
