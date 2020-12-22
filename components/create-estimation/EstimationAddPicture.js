import React from "react";
const EstimationAddPicture = ({ hidden }) => {
  const inComing = () => {
    alert("Fonction à venir plus tard");
  };
  return (
    <div className={hidden}>
      <h2>Divers</h2>
      <button type="button" className="btn btnBlue" onClick={inComing}>
        Ajouter des photos
      </button>
    </div>
  );
};
export default EstimationAddPicture;
