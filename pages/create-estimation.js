import EstimationClient from "../components/create-estimation/EstimationClient";
import EstimationCoordinate from "../components/create-estimation/EstimationCoordinate";
import EstimationDefinition from "../components/create-estimation/EstimationDefinition";
import EstimationAddPicture from "../components/create-estimation/EstimationAddPicture";
import EstimationEnergy from "../components/create-estimation/EstimationEnergy";
import EstimationFinal from "../components/create-estimation/EstimationFinal";
import EstimationInstallation from "../components/create-estimation/EstimationInstallation";
import EstimationPriceModif from "../components/create-estimation/EstimationPriceModif";
import EstimationRoomOutside from "../components/create-estimation/EstimationRoomOutside";
import EstimationRoomInside from "../components/create-estimation/EstimationRoomInside";
import EstimationPagination from "../components/create-estimation/EstimationPagination";

import React, { useState } from "react";
const creaEstimation = () => {
  const [status, setStatus] = useState(false);
  const select = () => {
    setStatus(true);
  };
  return (
    <>
      <h1>Création d'une nouvelle estimation</h1>
      {/* <EstimationPagination /> */}
      <form>
        <EstimationClient status={status} />
        <EstimationCoordinate />
        <EstimationDefinition />
        <EstimationEnergy />
        <EstimationInstallation />
        <EstimationAddPicture />
        <EstimationRoomInside />
        <EstimationRoomOutside />
        <EstimationPriceModif />
        <EstimationFinal />
      </form>
    </>
  );
};

export default creaEstimation;
