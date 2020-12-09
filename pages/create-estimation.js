import EstiClient from "../components/create-estimation/EstiClient";
import EstiCoordonee from "../components/create-estimation/EstiCoordonee";
import EstiDefinition from "../components/create-estimation/EstiDefintion";
import EstiDivers from "../components/create-estimation/EstiDivers";
import EstiEnergie from "../components/create-estimation/EstiEnergie";
import EstiFinal from "../components/create-estimation/EstiFinale";
import EstiInstallation from "../components/create-estimation/EstiInstallation";
import EstiModPrix from "../components/create-estimation/EstiModPrix";
import EstiPieceExt from "../components/create-estimation/EstiPieceExt";
import EstiPieceInt from "../components/create-estimation/EstiPieceInt";
import PaginationEsti from "../components/PaginationEsti";
import React, { useState } from "react";
const creaEstimation = () => {
  const [status, setStatus] = useState(false);
  const select = () => {
    setStatus(true);
  };
  return (
    <>
      <h1>Création d'une nouvelle estimation</h1>
      <PaginationEsti />
      <form>
        <EstiClient status={status} />
        <EstiCoordonee />
        <EstiDefinition />
        <EstiEnergie />
        <EstiInstallation />
        <EstiDivers />
        <EstiPieceInt />
        <EstiPieceExt />
        <EstiModPrix />
        <EstiFinal />
      </form>
    </>
  );
};

export default creaEstimation;
