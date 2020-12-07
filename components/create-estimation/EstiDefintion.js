import React from "react";
import DropHabitat from "./DropHabitat";
import DropSimple from "../DropSimple";
import FloatingInput from "../floatingInput";
import Compass from "./compass";
const EstiDefinition = () => {
  return (
    <>
      <h2>Définitions générale du bien</h2>
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
      <p>LE COMPASS QUAND IL EST OK C EST ICI</p>
      <h3>Urbanisme</h3>
      <p>INSERTION INPUT TRUE FALSE</p>
      <p>INSERTION INPUT TRUE FALSE</p>
      <DropSimple label="Zone d'habitat" name="etat" />
    </>
  );
};
export default EstiDefinition;
