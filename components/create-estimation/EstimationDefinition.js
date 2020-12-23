import React from "react";
import DropSimple from "../DropSimple";
import FloatingInput from "../for-all-form/FloatingInput";
import Compass from "./Compass";
import CommentArea from "../CommentArea";
import Switch from "../for-all-form/Switch";
import DropDownMenuImmoType from "./DropDownMenuImmoType";
import DropDownMenu from "../DropDownMenu";
import { BuildingState, Zoning } from "../../common/immobilier";

const EstimationDefinition = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Définition générale du bien</h2>
      <h3>Type d'habitat</h3>
      <DropDownMenuImmoType />

      <br />
      <DropSimple label="Nombres de façades" name="frontageCount" />
      <h3>surface</h3>
      <FloatingInput
        type="texte"
        label="Superficie terrain constructible"
        htmlForAndId="buildableArea"
        isRequired={true}
      />
      <FloatingInput
        type="texte"
        label="Superficie terrain non-constructible"
        htmlForAndId="nonBuildableArea"
        isRequired={true}
      />
      <FloatingInput
        type="texte"
        label="Superficie habitation habitable"
        htmlForAndId="habitableArea"
        isRequired={true}
      />
      <FloatingInput
        type="texte"
        label="Superficie habitation non-habitable"
        htmlForAndId="nonHabitableArea"
        isRequired={true}
      />

      <FloatingInput
        type="texte"
        label="Année de construction"
        htmlForAndId="constructionDate"
      />
      <FloatingInput type="texte" label="Cadastre(€)" htmlForAndId="taxe" />
      <FloatingInput
        type="texte"
        label="Charge communes (€)"
        htmlForAndId="sharedCharges"
      />
      <span>Etat d'habitat</span>
      <DropDownMenu table={BuildingState} id="buildingState" />
      <h3>Orientation</h3>
      <Compass />
      <h3>Urbanisme</h3>
      <Switch label="Permis de bâtir obtenue" idfor="buildingPermit" />
      <Switch label="Zone inondable" idfor="floodZone" />
      <span>Zone d'habitat</span>
      <DropDownMenu table={Zoning} id="zoning" />
      <CommentArea label="votre commentaire" forId="comStep3" />
    </div>
  );
};
export default EstimationDefinition;
