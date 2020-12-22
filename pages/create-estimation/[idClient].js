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

    const form = document.forms["formEstimation"];
    const formObjectToSend = {};
    for (let i = 0; i < form.length; i++) {
      if (
        form[i].name &&
        form[i].name != "orientation" &&
        form[i].type != "checkbox"
      ) {
        let newObject = {};
        newObject.value = form[i].value;
        formObjectToSend[form[i].name] = newObject;
      } else if (form[i].name == "orientation" && form[i].checked) {
        let newObjectCompass = {};
        newObjectCompass.value = form[i].value;
        formObjectToSend[form[i].name] = newObjectCompass;
      } else if (form[i].type == "checkbox") {
        let newObjectCheckbox = {};
        newObjectCheckbox.value = form[i].checked;
        formObjectToSend[form[i].name] = newObjectCheckbox;
      }
    }
    console.log(formObjectToSend.orientation.value);

    const estimation = {
      ownerId: "string",
      agentId: "string",
      type: +Math.floor(formObjectToSend.subType.value / 100),
      customizedId: "string",
      subType: +formObjectToSend.subType.value,
      constructionDate: "2020-12-22T16:21:54.488Z",
      buildingState: +formObjectToSend.buildingState.value,
      orientation: +formObjectToSend.orientation.value,
      taxe: +formObjectToSend.taxe.value,
      sharedCharges: +formObjectToSend.sharedCharges.value,
      buildingPermit: formObjectToSend.buildingPermit.value,
      floodZone: formObjectToSend.floodZone.value,
      zoning: +formObjectToSend.zoning.value,
      lift: formObjectToSend.lift.value,
      disabledAccess: formObjectToSend.disabledAccess.value,
      swimmingPool: formObjectToSend.swimmingPool.value,
      reinforcedDoor: formObjectToSend.reinforcedDoor.value,
      parlophone: formObjectToSend.parlophone.value,
      sharedTerrace: formObjectToSend.sharedTerrace.value,
      rainwaterCollector: formObjectToSend.rainwaterCollector.value,
      well: formObjectToSend.well.value,
      comment: formObjectToSend.comment.value,
      address: {
        number: formObjectToSend.number.value + formObjectToSend.box.value,
        street: formObjectToSend.street.value,
        city: formObjectToSend.city.value,
        zipCode: formObjectToSend.zipCode.value,
        state: formObjectToSend.state.value,
        country: formObjectToSend.country.value,
        comment: formObjectToSend.comment.value,
        immobilierId: 0,
      },
      inside: {
        immobilierId: 0,
        habitableArea: +formObjectToSend.habitableArea.value,
        nonHabitableArea: +formObjectToSend.nonHabitableArea.value,
        areaPrice: +formObjectToSend.areaPrice.value,
        floors: [
          {
            insideId: 0,
            name: "string",
            area: 0,
            comment: "string",
            insidePieces: [
              {
                floorId: 0,
                type: +formObjectToSend.typeInside1.value,
                floorId: 0,
                area: +formObjectToSend.areaInside1.value,
                comment: +formObjectToSend.commentInside1.value,
                flooring: +formObjectToSend.flooring1.value,
                finish: +formObjectToSend.finishInside1.value,
              },
            ],
          },
        ],
      },
      outside: {
        immobilierId: 0,
        area: 0,
        buildableArea: +formObjectToSend.buildableArea.value,
        nonBuildableArea: +formObjectToSend.nonBuildableArea.value,
        buildableAreaPrice: +formObjectToSend.buildableAreaPrice.value,
        nonBuildableAreaPrice: ++formObjectToSend.nonBuildableAreaPrice.value,
        outsidePieces: [
          {
            outsideId: 0,
            type: +formObjectToSend.typeOutside1.value,
            subType: +formObjectToSend.subTypeOutside1.value,
            orientation: +formObjectToSend.orientationOutside.value,
            area: +formObjectToSend.areaOutside1.value,
            comment: formObjectToSend.commentOutside1.value,
            finish: +formObjectToSend.finishOutside1.value,
          },
        ],
      },
      energy: {
        immobilierId: 0,
        consumption: +formObjectToSend.consumption.value,
        class: +formObjectToSend.classEnergy.value,
        pebNumber: formObjectToSend.pebNumber.value,
        co2: +formObjectToSend.co2.value,
        waterHeater: +formObjectToSend.waterHeater.value,
        heating: +formObjectToSend.heating.value,
        framing: +formObjectToSend.framing.value,
        vitrage: +formObjectToSend.vitrage.value,
        insulation: +formObjectToSend.insulation.value,
        solarPanel: formObjectToSend.solarPanel.value,
        solarHeating: formObjectToSend.solarHeating.value,
        comment: formObjectToSend.comStep4.value,
      },
      photos: [{}],
      extras: [
        {
          immobilierId: 0,
          name: formObjectToSend.nameExtra0.value,
          price: +formObjectToSend.prixExtra0.value,
          operateur: Boolean(operateurExtra0),
          modifier: 0,
        },
      ],
    };
  };

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <span>Id Client : {idClient}</span>
      <h1>Création d'une nouvelle estimation</h1>
      <div className="contain mx-auto">
        <EstimationPagination select={select} />
        <form onSubmit={handleSubmit} name="formEstimation">
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
