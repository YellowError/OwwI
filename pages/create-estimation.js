import Layout from "../components/Layout";
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
import ButtonsPaginationEsti from "../components/create-estimation/ButtonPaginationEstimation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuMobile from "../components/MenuMobile";
import Position from "../common/Position";

const CreateEstimationPage = ({ user, requestServer }) => {
  const pageTitle = "Create Estimation";

  const router = useRouter();
  const [etatUser, setEtatUser] = useState("");
  useEffect(async () => {
    if (user) {
      setEtatUser(user);
      await findSpecificUsers();
    }
  }, [user]);

  const [clientLinked, setClientLinked] = useState(null);

  const findSpecificUsers = async () => {
    // let response = await requestServer(
    //   "get",
    //   `/api/Authorization/filter-users?role=0&filter=0&query=${user.id}`
    // );
    let response = await requestServer(
      "get",
      `/api/Authorization/get-users?role=0`
    );

    let fetchedUsers = response.applicationUsers.filter((client) => {
      return client.agentCode == user.id;
    });
    setClientLinked(fetchedUsers);
  };

  const mainButton = {
    link: `/create-client/${user.id}`,
    svg: "createClient",
    style: "",
    logic: () => {},
  };
  const buttons = [
    { title: "lstClient", position: Position.Left, cible: "/listing" },
    {
      title: "createAgent",
      position: Position.Right,
      cible: "/create-client/2",
    },
    { title: "logOut", position: Position.Right, cible: "/dashboard" },
  ];
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
    if (stepBack) {
      if (status > 1) {
        stepBack.style.width = 55 * status + 10 * status - 10 + "px";
      } else if (status == 1) {
        stepBack.style.width = "55px";
      }
    }
  }, [status]);

  const handleSubmit = async (e) => {
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
      } else if (
        form[i].name == "orientation" &&
        form[i].getAttribute("checked") != null
      ) {
        let newObjectCompass = {};
        newObjectCompass.value = form[i].value;
        formObjectToSend[form[i].name] = newObjectCompass;
        // console.log(formObjectToSend[form[i].name]);
      } else if (form[i].type == "checkbox") {
        let newObjectCheckbox = {};
        newObjectCheckbox.value = form[i].checked;
        formObjectToSend[form[i].name] = newObjectCheckbox;
      }
    }
    // console.log(formObjectToSend.orientation);

    const estimation = {
      ownerId: formObjectToSend.ownerId.value,
      agentId: user.id,
      type: +Math.floor(formObjectToSend.subType.value / 100),
      subType: +formObjectToSend.subType.value,
      constructionDate: "2020-12-22T16:21:54.488Z",
      totalArea: 1,
      orientation: formObjectToSend.orientation
        ? +formObjectToSend.orientation.value
        : 0,
      buildingState: +formObjectToSend.buildingState.value,
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
      },
      inside: {
        immobilierId: 0,
        habitableArea: +formObjectToSend.habitableArea.value,
        nonHabitableArea: +formObjectToSend.nonHabitableArea.value,
        areaPrice: +formObjectToSend.areaPrice.value,
        floors: [
          {
            insidePieces: [
              {
                type: formObjectToSend.typeInside1
                  ? +formObjectToSend.typeInside1.value
                  : 0,

                area: formObjectToSend.areaInside1
                  ? +formObjectToSend.areaInside1.value
                  : 0,
                comment: formObjectToSend.commentInside1
                  ? formObjectToSend.commentInside1.value
                  : "",
                flooring: formObjectToSend.flooring1
                  ? +formObjectToSend.flooring1.value
                  : 0,
                finish: formObjectToSend.finishInside1
                  ? +formObjectToSend.finishInside1.value
                  : 0,
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
        nonBuildableAreaPrice: +formObjectToSend.nonBuildableAreaPrice.value,
        outsidePieces: [
          {
            type: formObjectToSend.typeOutside1
              ? +formObjectToSend.typeOutside1.value
              : 0,
            subType: formObjectToSend.subTypeOutside1
              ? +formObjectToSend.subTypeOutside1.value
              : 0,
            orientation: formObjectToSend.orientationOutside
              ? +formObjectToSend.orientationOutside.value
              : 0,
            area: formObjectToSend.areaOutside1
              ? +formObjectToSend.areaOutside1.value
              : 0,
            comment: formObjectToSend.commentOutside1
              ? formObjectToSend.commentOutside1.value
              : "",
            finish: formObjectToSend.finishOutside1
              ? +formObjectToSend.finishOutside1.value
              : 0,
          },
        ],
      },
      energy: {
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
      photos: [],
      extras: [],
    };

    let isOver = false;
    let i = 0;

    while (!isOver) {
      if (formObjectToSend.hasOwnProperty("nameExtra" + i)) {
        let extraTmp = {
          name: formObjectToSend[`nameExtra${i}`]
            ? formObjectToSend[`nameExtra${i}`].value
            : "",
          price: formObjectToSend[`prixExtra${i}`]
            ? +formObjectToSend[`prixExtra${i}`].value
            : 0,
          operateur: formObjectToSend[`operateurExtra${i}`]
            ? Boolean(formObjectToSend[`operateurExtra${i}`].value)
            : false,
        };
        estimation.extras.push(extraTmp);
      } else {
        isOver = true;
      }
      i++;
    }
    console.log(estimation);

    let validation = await requestServer(
      "post",
      `/Immobilier`,
      JSON.stringify(estimation)
    );

    // await requestServer(
    //   "post",
    //   `/Immobilier/send-estimate-agent?mail=adressemailrandom@gmail.com`,
    //   JSON.stringify(estimation)
    // );

    if (validation !== undefined) {
      await requestServer(
        "post",
        `/Immobilier/send-estimate`,
        JSON.stringify(estimation)
      );
      router.push("/dashboard");
    }
  };

  return (
    <Layout title={pageTitle} user={user}>
      <div className="contain flex flex-wrap flex-col items-center">
        <h1>Création d'une nouvelle estimation</h1>
        <EstimationPagination select={select} />
        <form
          onSubmit={handleSubmit}
          name="formEstimation"
          className="formEstimation mb-20 md:mb-24"
        >
          <EstimationClient
            user={user}
            clientLinked={clientLinked}
            hidden={status == 1 ? "" : "hidden"}
          />
          <EstimationCoordinate
            hidden={status == 2 || status == 10 ? "" : "hidden"}
          />
          <EstimationDefinition
            hidden={status == 3 || status == 10 ? "" : "hidden"}
          />
          <EstimationEnergy
            hidden={status == 4 || status == 10 ? "" : "hidden"}
          />
          <EstimationInstallation
            hidden={status == 5 || status == 10 ? "" : "hidden"}
          />
          <EstimationAddPicture
            hidden={status == 6 || status == 10 ? "" : "hidden"}
          />
          <EstimationRoomInside
            hidden={status == 7 || status == 10 ? "" : "hidden"}
          />
          <EstimationRoomOutside
            hidden={status == 8 || status == 10 ? "" : "hidden"}
          />
          <EstimationPriceModif
            hidden={status == 9 || status == 10 ? "" : "hidden"}
          />
          <EstimationFinal hidden={status == 10 ? "" : "hidden"} />
          <ButtonsPaginationEsti setStatus={setStatus} status={status} />
        </form>
        <div className="container md:h-24 fixed bottom-0">
          <MenuMobile mainButton={mainButton} buttons={buttons} />
        </div>
      </div>
    </Layout>
  );
};

export default CreateEstimationPage;
