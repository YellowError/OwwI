import React from "react";
import CommentaireArea from "../CommentaireArea";
import FloatingInput from "../floatingInput";
const EstiCoordonee = () => {
  return (
    <>
      <h2>Coordonnées du bien immobilier</h2>
      <FloatingInput
        type="texte"
        label="Adresse physique"
        htmlForAndId="adresse"
      />
      <FloatingInput type="texte" label="N°" htmlForAndId="num" />
      <FloatingInput type="texte" label="Bte" htmlForAndId="boîte" />
      <FloatingInput type="texte" label="Code postale" htmlForAndId="cp" />
      <FloatingInput type="texte" label="Ville" htmlForAndId="ville" />
      <FloatingInput type="texte" label="Province" htmlForAndId="province" />
      <FloatingInput type="texte" label="Pays" htmlForAndId="pays" />
      <CommentaireArea label="votre commentaire" idFor="comStep2" />
    </>
  );
};
export default EstiCoordonee;
