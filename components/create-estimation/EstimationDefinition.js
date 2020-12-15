import React from "react";
import DropHabitat from "./DropHabitat";
import DropSimple from "../DropSimple";
import FloatingInput from "../for-all-form/FloatingInput";
import Compass from "./Compass";
import CommentArea from "../CommentArea";
import Switch from "../for-all-form/Switch";
const EstimationDefinition = () => {
  return (
    <>
      <h2>Définition générale du bien</h2>
      <h3>Type d'habitat</h3>
      <DropHabitat />
      <br />
      <DropSimple label="Nombres de façades" name="nombre" />
      <h3>surface</h3>
      <FloatingInput
        type="texte"
        label="Superficie terrain constructible"
        htmlForAndId="supTerConst"
      />
      <FloatingInput
        type="texte"
        label="Superficie terrain non-constructible"
        htmlForAndId="supTerNonConst"
      />
      <FloatingInput
        type="texte"
        label="Superficie habitation habitable"
        htmlForAndId="supHabHabitable"
      />
      <FloatingInput
        type="texte"
        label="Nbre étages"
        htmlForAndId="nbrEtages"
      />
      <FloatingInput
        type="texte"
        label="Nbre appart."
        htmlForAndId="nbrAppart"
      />
      <FloatingInput
        type="texte"
        label="Année de construction"
        htmlForAndId="anneeConstr"
      />
      <FloatingInput
        type="texte"
        label="Cadastre/Charge communes (€)"
        htmlForAndId="cadastCharge"
      />
      <DropSimple label="Etat du bâtiment" name="etat" />
      <h3>Orientation</h3>
      <Compass />
      <h3>Urbanisme</h3>
      <Switch label="Permis de bâtir obtenue" idfor="permis" />
      <Switch label="Zone inondable" idfor="inondable" />
      <DropSimple label="Zone d'habitat" name="etat" />
      <CommentArea label="votre commentaire" idFor="comStep3" />
    </>
  );
};
export default EstimationDefinition;
