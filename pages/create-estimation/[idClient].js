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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      street: { value: street },
      number: { value: number },
      box: { value: box },
      zipCode: { value: zipCode },
      city: { value: city },
      country: { value: country },
      state: { value: state },
      comment: { value: comment },
      subType: { value: subType },
      frontageCount: { value: frontageCount },
      buildableArea: { value: buildableArea },
      nonBuildableArea: { value: nonBuildableArea },
      habitableArea: { value: habitableArea },
      constructionDate: { value: constructionDate },
      taxe: { value: taxe },
      sharedCharges: { value: sharedCharges },
      buildingState: { value: buildingState },
      orientation: { value: orientation },
      buildingPermit: { value: buildingPermit },
      floodZone: { value: floodZone },
      zoning: { value: zoning },
      comStep3: { value: comStep3 },
      heating: { value: heating },
      consumption: { value: consumption },
      classEnergy: { value: classEnergy },
      pebNumber: { value: pebNumber },
      co2: { value: co2 },
      waterHeater: { value: waterHeater },
      framing: { value: framing },
      insulation: { value: insulation },
      vitrage: { value: vitrage },
      solarPanel: { value: solarPanel },
      solarHeating: { value: solarHeating },
      comStep4: { value: comStep4 },
      lift: { value: lift },
      parlophone: { value: parlophone },
      reinforcedDoor: { value: reinforcedDoor },
      sharedTerrace: { value: sharedTerrace },
      disabledAccess: { value: disabledAccess },
      rainwaterCollector: { value: rainwaterCollector },
      swimmingPool: { value: swimmingPool },
      well: { value: well },
      comStep5: { value: comStep5 },
      areaPrice: { value: areaPrice },
      buildableAreaPrice: { value: buildableAreaPrice },
      nonBuildableAreaPrice: { value: nonBuildableAreaPrice },
    } = e.target.elements;

    console.log(type, subType);
  };

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <span>Id Client : {idClient}</span>
      <h1>Création d'une nouvelle estimation</h1>
      <div className="contain mx-auto">
        <EstimationPagination select={select} />
        <form onSubmit={handleSubmit}>
          <EstimationClient hidden={status == 1 ? "" : "hidden"} />
          <EstimationCoordinate hidden={status == 2 ? "" : "hidden"} />
          <EstimationDefinition hidden={status == 3 ? "" : "hidden"} />
          <EstimationEnergy hidden={status == 4 ? "" : "hidden"} />
          <EstimationInstallation hidden={status == 5 ? "" : "hidden"} />
          <EstimationAddPicture hidden={status == 6 ? "" : "hidden"} />
          <EstimationRoomInside hidden={status == 7 ? "" : "hidden"} />
          <EstimationRoomOutside hidden={status == 8 ? "" : "hidden"} />
          <EstimationPriceModif hidden={status == 9 ? "" : "hidden"} />
          <EstimationFinal hidden={status == 10 ? "" : "hidden"} />
          <ButtonsPaginationEsti setStatus={setStatus} status={status} />
        </form>
      </div>
    </Layout>
  );
};

export default CreateEstimationPage;
