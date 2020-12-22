import React from "react";

const PicturesEstimation = ({ estimation }) => {
  return (
    <div className="blockGlobal">
      <h2>Divers</h2>
      <div className="flex flex-wrap justify-center">
        {estimation.photos.map((element) => {
          return (
            <img
              className="picturesEsti"
              src={`./../images/${element.value}`}
              alt="photo du bien"
            />
          );
        })}
      </div>
    </div>
  );
};

export default PicturesEstimation;
