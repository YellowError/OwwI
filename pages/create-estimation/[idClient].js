import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import EstimationClient from "../../components/create-estimation/EstimationClient";
import EstimationCoordinate from "../../components/create-estimation/EstimationCoordinate";
import EstimationDefinition from "../../components/create-estimation/EstimationDefinition";
import EstimationAddPicture from "../../components/create-estimation/EstimationAddPicture";
import EstimationEnergy from "../../components/create-estimation/EstimationEnergy";
import EstimationFinal from "../../components/create-estimation/EstimationFinal";
import EstimationInstallation from "../../components/create-estimation/EstimationInstallation";
import EstimationPriceModif from "../../components/create-estimation/EstimationPriceModif";
import EstimationRoomOutside from "../../components/create-estimation/EstimationRoomOutside";
import EstimationRoomInside from "../../components/create-estimation/EstimationRoomInside";
import EstimationPagination from "../../components/create-estimation/EstimationPagination";
import ButtonsPaginationEsti from "../../components/create-estimation/ButtonPaginationEstimation";
import React, { useState, useEffect } from "react";

const CreateEstimationPage = ({ user }) => {
  const pageTitle = "Create Estimation";
  const router = useRouter();
  const { idClient } = router.query;

  const [status, setStatus] = useState(1);
  const select = (number) => {
    setStatus(number);
  };
  useEffect(() => {
    const stepBack = document.querySelector(".stepBack");
    const link = document.getElementsByTagName("a");
    [...link].forEach((element, index) => {
      if (index <= status - 1) {
        element.classList.add("stepPass");
      } else {
        element.classList.remove("stepPass");
      }
    });
    if (status > 1) {
      stepBack.style.width = 55 * status + 10 * status - 10 + "px";
    } else if (status == 1) {
      stepBack.style.width = "55px";
    }
  }, [status]);

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <span>Id Client : {idClient}</span>
      <h1>Création d'une nouvelle estimation</h1>
      <EstimationPagination select={select} />
      <form>
        {status == 1 ? <EstimationClient /> : ""}
        {status == 2 ? <EstimationCoordinate /> : ""}
        {status == 3 ? <EstimationDefinition /> : ""}
        {status == 4 ? <EstimationEnergy /> : ""}
        {status == 5 ? <EstimationInstallation /> : ""}
        {status == 6 ? <EstimationAddPicture /> : ""}
        {status == 7 ? <EstimationRoomInside /> : ""}
        {status == 8 ? <EstimationRoomOutside /> : ""}
        {status == 9 ? <EstimationPriceModif /> : ""}
        {status == 10 ? <EstimationFinal /> : ""}
        <ButtonsPaginationEsti setStatus={setStatus} status={status} />
      </form>
    </Layout>
  );
};

export default CreateEstimationPage;
