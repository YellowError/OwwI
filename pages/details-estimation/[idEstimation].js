import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ButtonModSupp from "../../components/for-all-form/ButtonModSupp";
import { useEffect, useState } from "react";
import InfosAgent from "../../components/details-estimation/InfosAgent";
import ResumeEstimation from "../../components/details-estimation/ResumeEstimation";
import DescriptionEstimation from "../../components/details-estimation/DescriptionEstimation";
import EnergyEstimation from "../../components/details-estimation/EnergyEstimation";
import InstallationEstimation from "../../components/details-estimation/InstallationEstimation";
import PicturesEstimation from "../../components/details-estimation/PictureEstimation";
import RoomInsideEstimation from "../../components/details-estimation/RoomInsideEstimation";
import RoomOutsideEstimation from "../../components/details-estimation/RoomOutsideEstimation";
import ModificationPriceEstimation from "../../components/details-estimation/ModificationPriceEstimation";

const DetailsEstimationPage = ({ user, onLogout }) => {
  const pageTitle = "Details Estimation";
  const router = useRouter();
  const { idEstimation } = router.query;

  let fetchAgent = {
    id: "31241256624",
    firstname: "Patrick",
    lastname: "Miroux",
    mail: "patrick.m@century.be",
    tel: "0496348231",
  };

  let fetchestimation = {
    id: 43153421,
    ownerId: "23145908543",
    agentId: "31241256624",
    creationDate: "2020-12-16T15:10:55.230Z",
    customizedId: "",
    type: 1,
    subType: 102,
    frontageCount: 2,
    floorNumber: 0,
    constructionDate: "1990-12-16T15:10:55.230Z",
    buildingState: 1,
    orientation: 6,
    totalArea: 377,
    taxe: 700,
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
              type: 1,
              floorId: 0,
              area: 10,
              subType: 0,
              comment: "",
              windowCount: 1,
              sink: false,
              humidity: 0,
              bath: false,
              shower: true,
              toilet: false,
              simpleSink: false,
              doubleSink: false,
              flooring: 2,
              chimney: true,
              finish: 5,
            },
            {
              id: 2,
              type: 0,
              floorId: 0,
              area: 10,
              subType: 0,
              comment: "",
              windowCount: 0,
              sink: true,
              humidity: 0,
              bath: false,
              shower: false,
              toilet: false,
              simpleSink: false,
              doubleSink: true,
              flooring: 2,
              chimney: false,
              finish: 8,
            },
          ],
        },
        {
          id: 1,
          name: "Etage 1",
          area: 174,
          comment: "no comment",
          insideId: 0,
          pieces: [
            {
              id: 1,
              type: 4,
              floorId: 1,
              area: 13,
              subType: 0,
              comment: "Très belle chambre",
              windowCount: 1,
              sink: false,
              humidity: 0,
              bath: false,
              shower: false,
              toilet: false,
              simpleSink: false,
              doubleSink: false,
              flooring: 0,
              chimney: true,
              finish: 10,
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
      comment: "",
      pieces: [
        {
          id: 0,
          outsideId: 0,
          type: 1,
          subType: 0,
          orientation: 6,
          area: 5,
          comment: "",
          flooring: 5,
          finish: 6,
        },
        {
          id: 0,
          outsideId: 0,
          type: 3,
          subType: 2,
          orientation: 2,
          area: 2,
          comment: "Il faut nettoyer la piscine",
          flooring: 0,
          finish: 4,
        },
      ],
    },
    energy: {
      id: 0,
      immobilierId: 0,
      typeComment: "",
      consumption: 150,
      class: 4,
      pebNumber: "",
      co2: 0,
      theoricalConsumption: 0,
      electricityState: 0,
      pipeState: 0,
      waterHeater: 0,
      heating: 1,
      framing: 0,
      vitrage: 0,
      insulation: 0,
      solarPanel: false,
      solarHeating: false,
      comment: "",
    },
    photos: [
      {
        id: 0,
        value: "photo1.jpg",
        comment: "",
        immobilierId: 0,
      },
      {
        id: 1,
        value: "photo2.jpg",
        comment: "",
        immobilierId: 0,
      },
      {
        id: 2,
        value: "photo3.jpg",
        comment: "",
        immobilierId: 0,
      },
      {
        id: 3,
        value: "photo4.jpg",
        comment: "",
        immobilierId: 0,
      },
      {
        id: 4,
        value: "photo5.jpg",
        comment: "",
        immobilierId: 0,
      },
    ],
    extras: [
      {
        id: 0,
        name: "une chambre forte",
        price: 1000,
        operateur: true,
        immobilierId: 0,
        modifier: 0,
      },
      {
        id: 0,
        name: "Refaire la peinture",
        price: 400,
        operateur: false,
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
      state: "Hainaut",
      country: "Belgique",
      name: "",
      longitude: 0,
      latitude: 0,
      comment: "Maison de campagne à proximité de la ville.",
      immobilierId: 0,
    },
  };

  const [estimation, setEstimation] = useState(fetchestimation);

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

  const [agent, setAgent] = useState(fetchAgent);

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <p>Id estimation : {idEstimation}</p>
      {/* {Object.keys(estimation).length != 0 ? ( */}
      <>
        <h2>L'estimation N° {idEstimation}</h2>
        <ButtonModSupp />
        <div className="md:flex md:justify-around">
          <div className="md:w-5/12">
            <InfosAgent agent={agent} />
            <ResumeEstimation estimation={estimation} />
            <DescriptionEstimation estimation={estimation} />
            <EnergyEstimation estimation={estimation} />
            <InstallationEstimation estimation={estimation} />
            {estimation.photos.length != 0 ? (
              <PicturesEstimation estimation={estimation} />
            ) : (
              ""
            )}
          </div>
          <div className="md:w-5/12">
            <RoomInsideEstimation estimation={estimation} />
            {estimation.outside.pieces.length != 0 ? (
              <RoomOutsideEstimation estimation={estimation} />
            ) : (
              ""
            )}
            <ModificationPriceEstimation estimation={estimation} />
          </div>
        </div>
      </>
      {/* ) : (
        ""
      )} */}
    </Layout>
  );
};

export default DetailsEstimationPage;
