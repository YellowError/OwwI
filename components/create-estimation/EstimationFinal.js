import React from "react";
import CommentArea from "../CommentArea";
const EstimationFinal = ({ hidden }) => {
  return (
    <div className={hidden}>
      <h2>Résumé</h2>
      <CommentArea label="votre commentaire" idFor="comStep10" />
    </div>
  );
};
export default EstimationFinal;
