import React from "react";
import {
  ImmoType,
  ImmoSubType,
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

const RoomInsideEstimation = ({ estimation }) => {
  return (
    <div className="block">
      <h2>Pièces intérieures</h2>

      {estimation.inside.floors.map((element) => {
        return (
          <>
            <span className="titleFloor">{element.name}</span>

            {element.pieces.map((room) => {
              return (
                <>
                  <ul className="listDetailEstimation">
                    <span className="titleRoom">
                      {InsidePieceType[room.type]}
                    </span>

                    {room.area != 0 ? (
                      <li>
                        <span>Surface</span>
                        <span>{room.area}m²</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {room.type == 0 ? (
                      <li>
                        <span>Type de cuisine</span>
                        <span>{InsidePieceSubtype[room.subType]}</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {room.type == 6 ? (
                      <li>
                        <span>Type de grenier</span>
                        <span>{InsidePieceSubtype[room.subType]}</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {room.windowCount != 0 ? (
                      <li>
                        <span>Nombre de fenêtre(s)</span>
                        <span>{room.windowCount}</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {room.sink ? (
                      room.doubleSink ? (
                        <li>
                          <span>Type d'évier</span>
                          <span>double</span>
                        </li>
                      ) : room.simpleSink ? (
                        <li>
                          <span>Type d'évier</span>
                          <span>simple</span>
                        </li>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {room.bath ? (
                      <li>
                        <span>Beignoire</span>
                        <img src="./../images/true.svg" />
                      </li>
                    ) : (
                      ""
                    )}
                    {room.shower ? (
                      <li>
                        <span>Douche</span>
                        <img src="./../images/true.svg" />
                      </li>
                    ) : (
                      ""
                    )}
                    {room.toilet ? (
                      <li>
                        <span>Toilette</span>
                        <img src="./../images/true.svg" />
                      </li>
                    ) : (
                      ""
                    )}
                    {room.humidity != 0 ? (
                      <li>
                        <span>Humidité</span>
                        <span>{room.humidity}%</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {room.chimney ? (
                      <li>
                        <span>Cheminée</span>
                        <img src="./../images/true.svg" />
                      </li>
                    ) : (
                      ""
                    )}
                    <li>
                      <span>Type de sol</span>
                      <span>{InsideFlooring[room.flooring]}</span>
                    </li>
                    <li>
                      <span>Finition</span>
                      <span>{room.finish}/10</span>
                    </li>
                  </ul>
                  <div>
                    <>
                      <p>Commentaire de votre agent:</p>
                      <p className="comment">
                        {room.comment != ""
                          ? room.comment
                          : "pas de commentaire"}
                      </p>
                    </>
                  </div>
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default RoomInsideEstimation;
