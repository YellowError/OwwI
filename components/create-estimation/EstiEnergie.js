import React from "react";
import DropSimple from "../DropSimple";
import FloatingInput from "../floatingInput";
const EstiEnergie = () => {
  return (
    <>
      <h2>Energie</h2>
      <DropSimple label="Type de chauffage" name="typeChauff" />
      <FloatingInput
        type="texte"
        label="Consomation énergique (en KW/m²)"
        htmlForAndId="cons"
      />
      <DropSimple label="Classe énergétique" name="classEnerg" />
      <FloatingInput type="texte" label="N° Rapport PEB" htmlForAndId="peb" />
      <FloatingInput type="texte" label="Emission de CO²" htmlForAndId="co2" />
      <DropSimple label="Chauffe-eau" name="chauffEau" />
      <br />
      <DropSimple label="Type de châssis" name="chassis" />
      <br />
      <DropSimple label="Type d'isolation" name="isolation" />
    </>
  );
};
export default EstiEnergie;
