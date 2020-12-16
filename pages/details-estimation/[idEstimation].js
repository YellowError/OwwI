import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ButtonModSupp from "../../components/for-all-form/ButtonModSupp";
import { useEffect, useState } from "react";
import {
  ImmoType,
  BuildingState,
  Orientation,
  Zoning,
  Decoration,
  InsidePieceType,
  InsideFlooring,
  InsidePieceSubtype,
  TypePieceExterne,
  SubTypePieceExterne,
  OutsideFlooring,
  EnergyCategory,
  ConstructionState,
  ChauffeEau,
  Chauffage,
  FramingType,
  Vitrage,
  Insulation,
  EstimationModifier,
} from "../../common/immobilier";

const DetailsEstimationPage = ({ user, onLogout }) => {
  const pageTitle = "Details Estimation";
  const router = useRouter();
  const { idEstimation } = router.query;

  let estimation = {
    id: 43153421,
    ownerId: "23145908543",
    agentId: "31241256624",
    creationDate: "2020-12-16T15:10:55.230Z",
    customizedId: "string",
    type: 1,
    subType: 102,
    frontageCount: 2,
    floorNumber: 0,
    constructionDate: "1990-12-16T15:10:55.230Z",
    buildingState: 1,
    orientation: 6,
    totalArea: 377,
    taxe: 0,
    sharedCharges: 0,
    buildingPermit: true,
    floodZone: false,
    zoning: 1,
    lift: false,
    disabledAccess: false,
    swimmingPool: false,
    reinforcedDoor: false,
    parlophone: false,
    sharedTerrace: false,
    otherInstallation: "",
    rainwaterCollector: true,
    well: true,
    comment: "",
    inside: {
      id: 0,
      habitableArea: 174,
      nonHabitableArea: 203,
      decoration: 0,
      furnished: true,
      comment: "string",
      areaPrice: 20,
      immobilierId: 0,
      floors: [
        {
          id: 0,
          name: "Rez-de-Chaussée",
          area: 174,
          comment: "no comment",
          insideId: 0,
          pieces: [
            {
              id: 1,
              type: 7,
              floorId: 0,
              area: 10,
              subType: 0,
              comment: "string",
              windowCount: 0,
              sink: false,
              humidity: 0,
              bath: false,
              shower: false,
              toilet: false,
              simpleSink: false,
              doubleSink: false,
              flooring: 2,
              chimney: true,
            },
            {
              id: 2,
              type: 0,
              floorId: 0,
              area: 10,
              subType: 0,
              comment: "string",
              windowCount: 0,
              sink: true,
              humidity: 0,
              bath: false,
              shower: false,
              toilet: false,
              simpleSink: false,
              doubleSink: false,
              flooring: 2,
              chimney: false,
            },
          ],
        },
      ],
    },
    outside: {
      id: 0,
      immobilierId: 0,
      area: 203,
      buildableArea: 0,
      nonBuildableArea: 0,
      buildableAreaPrice: 0,
      nonBuildableAreaPrice: 0,
      comment: "string",
      pieces: [
        {
          id: 0,
          outsideId: 0,
          type: 1,
          subType: 0,
          orientation: 6,
          area: 5,
          comment: "string",
          flooring: 0,
          finish: 6,
        },
      ],
    },
    energy: {
      id: 0,
      immobilierId: 0,
      typeComment: "string",
      consumption: 0,
      class: 4,
      pebNumber: "string",
      co2: 0,
      theoricalConsumption: 0,
      electricityState: 0,
      pipeState: 0,
      waterHeater: 0,
      heating: 1,
      framing: 0,
      vitrage: 0,
      insulation: 0,
      solarPanel: true,
      solarHeating: true,
      comment: "string",
    },
    photos: [
      {
        id: 0,
        value: "string",
        comment: "string",
        immobilierId: 0,
      },
    ],
    extras: [
      {
        id: 0,
        name: "uen chambre forte",
        price: 1000,
        operateur: true,
        immobilierId: 0,
        modifier: 0,
      },
    ],
    address: {
      id: 0,
      number: "9",
      street: "rue de la Madeleine",
      city: "Velaines",
      zipCode: "7760",
      state: "string",
      country: "Belgique",
      name: "string",
      longitude: 0,
      latitude: 0,
      comment: "Maison de campagne à proximité de la ville.",
      immobilierId: 0,
    },
  };

  // const [estimation, setEstimation] = useState({});

  // async function findAllEstimation() {
  //   let response = await fetch(
  //     `http://localhost:3002/estimations/${idEstimation}`
  //   );
  //   if (response.ok) {
  //     var responseJson = await response.json();
  //     setEstimation(responseJson);
  //   } else {
  //     throw new Error(`fetch failed`);
  //   }
  // }

  // useEffect(() => {
  //   if (idEstimation) findAllEstimation();
  // }, [router]);

  // console.log(estimation);

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <p>Id estimation : {idEstimation}</p>
      {/* {Object.keys(estimation).length != 0 ? ( */}
      <>
        <h2>L'estimation N° {idEstimation}</h2>
        <ButtonModSupp />

        <div>{BuildingState[estimation.type]}</div>
        <div>{estimation.id}</div>
      </>
      {/* ) : (
        ""
      )} */}
    </Layout>
  );
};

export default DetailsEstimationPage;
