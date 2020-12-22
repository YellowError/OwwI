import React from "react";
import DropSimple from "../DropSimple";
import DropDownMenu from "../DropDownMenu";
import FloatingInput from "../for-all-form/FloatingInput";
import CommentArea from "../CommentArea";
import {
  EnergyCategory,
  ChauffeEau,
  Chauffage,
  FramingType,
  Vitrage,
  Insulation,
} from "../../common/immobilier";
import Switch from "../for-all-form/Switch";

const EstimationEnergy = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Energie</h2>
      <span>Type de chauffage</span>
      <DropDownMenu table={Chauffage} id="heating" />
      <FloatingInput
        type="texte"
        label="Consomation énergique (en KW/m²)"
        htmlForAndId="consumption"
      />
      <span>Catégorie energétique</span>
      <DropDownMenu table={EnergyCategory} id="classEnergy" />
      <FloatingInput
        type="texte"
        label="N° Rapport PEB"
        htmlForAndId="pebNumber"
      />
      <FloatingInput type="texte" label="Emission de CO²" htmlForAndId="co2" />
      <span>Type de chauffe-eau</span>
      <DropDownMenu table={ChauffeEau} id="waterHeater" />
      <br />
      <span>Type de châssis</span>
      <DropDownMenu table={FramingType} id="framing" />
      <br />
      <span>Type d'isolation</span>
      <DropDownMenu table={Insulation} id="insulation" />
      <span>Type de vitrage</span>
      <DropDownMenu table={Vitrage} id="vitrage" />
      <Switch label="Panneaux solaire" idfor="solarPanel" />
      <Switch label="Chauffage solaire" idfor="solarHeating" />
      <CommentArea label="votre commentaire" forId="comStep4" />
    </div>
  );
};
export default EstimationEnergy;
