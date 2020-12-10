import React from "react";
import Switch from "../for-all-form/Switch";
import CommentArea from "../CommentArea";
const EstimationInstallation = () => {
  return (
    <>
      <h2>Installation</h2>
      <Switch label="Ascenseur" idfor="ascenseur" />
      <Switch label="Parlophone" idfor="parlophone" />
      <Switch label="Porte blindée" idfor="porteBlinde" />
      <Switch label="Terrasse commune" idfor="terrasse" />
      <Switch label="Accès handicapée" idfor="accesHandicape" />
      <Switch label="Récupération eau de pluie" idfor="eauPluie" />
      <CommentArea label="votre commentaire" idFor="comStep5" />
    </>
  );
};
export default EstimationInstallation;
