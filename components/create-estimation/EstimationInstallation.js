import React from "react";
import Switch from "../for-all-form/Switch";
import CommentArea from "../CommentArea";
const EstimationInstallation = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Installation</h2>
      <Switch label="Ascenseur" idfor="lift" />
      <Switch label="Parlophone" idfor="parlophone" />
      <Switch label="Porte blindée" idfor="reinforcedDoor" />
      <Switch label="Terrasse commune" idfor="sharedTerrace" />
      <Switch label="Accès handicapée" idfor="disabledAccess" />
      <Switch label="Récupération eau de pluie" idfor="rainwaterCollector" />
      <Switch label="Piscine" idfor="swimmingPool" />
      <Switch label="Puit" idfor="well" />
      <CommentArea label="votre commentaire" forId="comStep5" />
    </div>
  );
};
export default EstimationInstallation;
