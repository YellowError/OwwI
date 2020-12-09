import React from "react";
import TrueFalseSwitch from "../TrueFalseSwitch";
import CommentaireArea from "../CommentaireArea";
const EstiInstallation = () => {
  return (
    <>
      <h2>Installation</h2>
      <TrueFalseSwitch label="Ascenseur" idfor="ascenseur" />
      <TrueFalseSwitch label="Parlophone" idfor="parlophone" />
      <TrueFalseSwitch label="Porte blindée" idfor="porteBlinde" />
      <TrueFalseSwitch label="Terrasse commune" idfor="terrasse" />
      <TrueFalseSwitch label="Accès handicapée" idfor="accesHandicape" />
      <TrueFalseSwitch label="Récupération eau de pluie" idfor="eauPluie" />
      <CommentaireArea label="votre commentaire" idFor="comStep5" />
    </>
  );
};
export default EstiInstallation;
