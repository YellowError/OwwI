import React, { Fragment, useState } from "react";

const Compass = () => {
  const classNamePointsCardinal = [
    "north",
    "northWest",
    "northEast",
    "west",
    "east",
    "southWest",
    "southEast",
    "south",
  ];
  const pointsCardinal = ["1", "2", "3", "8", "7", "5", "6", "4"];
  const pointsCardinalFrench = [
    "Nord",
    "Nord Ouest",
    "Nord Est",
    "Ouest",
    "Est",
    "Sud Ouest",
    "Sud Est",
    "Sud",
  ];
  const pointsCardinalAbr = ["N", "NO", "NE", "O", "E", "SO", "SE", "S"];
  const [cardinalPointActive, setcardinalPointActive] = useState("");
  const [compassToRadio, setCompassToRadio] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const compassValueSelected = (pointCardinal) => {
    setcardinalPointActive(pointCardinal);
    setCompassToRadio(pointCardinal);
    setIsChecked(!isChecked);
  };

  return (
    <Fragment>
      <div className="flex hidden">
        {pointsCardinal.map((pointCardinal, index) => (
          <div className="m-2" key={pointCardinal}>
            <label htmlFor={pointCardinal}>{pointsCardinalFrench[index]}</label>
            <input
              className="mx-2"
              type="radio"
              name="orientation"
              id={pointCardinal}
              value={pointCardinal}
              defaultChecked={`${
                cardinalPointActive == pointCardinal ? isChecked : ""
              }`}
            />
          </div>
        ))}
      </div>

      <div className="compassWidth">
        <div className="compass">
          {pointsCardinal.map((pointCardinal, index) => (
            <div className="pointsCardinal" key={pointCardinal}>
              <p
                className={`${
                  cardinalPointActive == pointCardinal
                    ? "cardinalPointActive"
                    : ""
                } ${
                  classNamePointsCardinal[index]
                } pointsCardinal cardinalPoint`}
                id={pointCardinal}
                onClick={() => {
                  compassValueSelected(pointCardinal);
                }}
              >
                {pointsCardinalAbr[index]}
              </p>
            </div>
          ))}
          <svg
            className="dialCompass"
            width="4.5rem"
            viewBox="0 0 112 112"
            version="1.1"
          >
            <g transform="matrix(1,0,0,1,-2003.78,-753.556)">
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,103.329,317.023)">
                  <path d="M0,-1.437L0,-0C0,0.408 -0.331,0.738 -0.738,0.738C-1.146,0.738 -1.478,0.408 -1.478,-0L-1.478,-1.437C-1.478,-1.844 -1.146,-2.175 -0.738,-2.175C-0.331,-2.175 0,-1.844 0,-1.437M-2.699,-1.437L-2.699,-0C-2.699,1.082 -1.819,1.96 -0.738,1.96C0.343,1.96 1.222,1.082 1.222,-0L1.222,-1.437C1.222,-2.517 0.343,-3.397 -0.738,-3.397C-1.819,-3.397 -2.699,-2.517 -2.699,-1.437" />
                </g>
              </g>
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,90.4432,302.702)">
                  <path d="M0,1.476L-1.35,1.476C-1.757,1.476 -2.088,1.145 -2.088,0.738C-2.088,0.33 -1.757,-0.001 -1.35,-0.001L0,-0.001C0.407,-0.001 0.738,0.33 0.738,0.738C0.738,1.145 0.407,1.476 0,1.476M1.961,0.738C1.961,-0.343 1.081,-1.223 0,-1.223L-1.35,-1.223C-2.431,-1.223 -3.311,-0.343 -3.311,0.738C-3.311,1.819 -2.431,2.699 -1.35,2.699L0,2.699C1.081,2.699 1.961,1.819 1.961,0.738" />
                </g>
              </g>
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,113.998,303.438)">
                  <path d="M0,0.001C0,-0.406 0.331,-0.738 0.738,-0.738L2.089,-0.738C2.495,-0.738 2.827,-0.406 2.827,0.001C2.827,0.408 2.495,0.739 2.089,0.739L0.738,0.739C0.331,0.739 0,0.408 0,0.001M2.089,1.961C3.17,1.961 4.05,1.082 4.05,0.001C4.05,-1.08 3.17,-1.96 2.089,-1.96L0.738,-1.96C-0.343,-1.96 -1.222,-1.08 -1.222,0.001C-1.222,1.082 -0.343,1.961 0.738,1.961L2.089,1.961Z" />
                </g>
              </g>
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,117.338,318.188)">
                  <path d="M0,-29.496C-3.939,-33.435 -9.177,-35.604 -14.748,-35.604C-19.852,-35.604 -24.764,-33.742 -28.578,-30.359C-28.83,-30.135 -28.854,-29.749 -28.63,-29.496C-28.406,-29.244 -28.02,-29.221 -27.768,-29.445C-24.176,-32.628 -19.553,-34.382 -14.748,-34.382C-3.922,-34.382 4.886,-25.575 4.886,-14.748C4.886,-3.922 -3.922,4.885 -14.748,4.885C-25.573,4.885 -34.382,-3.922 -34.382,-14.748C-34.382,-19.553 -32.628,-24.177 -29.444,-27.768C-29.22,-28.02 -29.244,-28.407 -29.496,-28.631C-29.748,-28.854 -30.135,-28.832 -30.358,-28.579C-33.741,-24.764 -35.604,-19.852 -35.604,-14.748C-35.604,-9.178 -33.434,-3.939 -29.495,-0.001C-25.556,3.938 -20.318,6.108 -14.748,6.108C-9.177,6.108 -3.939,3.938 0,-0.001C3.938,-3.939 6.108,-9.178 6.108,-14.748C6.108,-20.319 3.938,-25.557 0,-29.496" />
                </g>
              </g>
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,90.6766,289.738)">
                  <path d="M0,27.403C3.302,30.276 7.532,31.858 11.913,31.858C16.763,31.858 21.323,29.969 24.752,26.54C28.182,23.111 30.069,18.551 30.069,13.701C30.069,8.852 28.182,4.292 24.752,0.862C21.323,-2.567 16.763,-4.455 11.913,-4.455C7.063,-4.455 2.504,-2.567 -0.925,0.862C-4.354,4.292 -6.243,8.852 -6.243,13.701C-6.243,18.083 -4.661,22.315 -1.788,25.615C-1.566,25.87 -1.181,25.896 -0.926,25.674C-0.672,25.453 -0.645,25.068 -0.866,24.813C-3.546,21.734 -5.021,17.788 -5.021,13.701C-5.021,4.364 2.576,-3.234 11.913,-3.234C21.251,-3.234 28.848,4.364 28.848,13.701C28.848,23.039 21.251,30.636 11.913,30.636C7.826,30.636 3.881,29.16 0.802,26.481C0.548,26.26 0.161,26.287 -0.061,26.542C-0.282,26.796 -0.255,27.181 0,27.403" />
                </g>
              </g>
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,100.043,295.874)">
                  <path d="M0,-7.854C-0.255,-7.774 -0.429,-7.539 -0.429,-7.271L-0.429,-0.532C-0.429,-0.195 -0.155,0.079 0.182,0.079C0.52,0.079 0.793,-0.195 0.793,-0.532L0.793,-5.311L4.235,-0.326C4.424,-0.053 4.735,0.064 5.028,-0.027C5.329,-0.122 5.523,-0.409 5.523,-0.761L5.519,-7.226C5.519,-7.563 5.244,-7.837 4.907,-7.837C4.569,-7.836 4.296,-7.562 4.296,-7.225L4.301,-2.382L0.685,-7.618C0.533,-7.838 0.256,-7.933 0,-7.854" />
                </g>
              </g>
            </g>
          </svg>
          <svg
            className="arrowCompass"
            width="1.5rem"
            viewBox="0 0 43 43"
            version="1.1"
          >
            <g transform="matrix(1,0,0,1,-2038.32,-788.09)">
              <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                <g transform="matrix(1,0,0,1,105.262,301.552)">
                  <path d="M0,3.695L-4.479,-0.784L3.732,-4.517L0,3.695ZM-5.343,0.08L-0.863,4.559L-9.076,8.291L-5.343,0.08ZM-6.195,-0.998L-10.49,8.45C-10.655,8.813 -10.58,9.231 -10.297,9.513C-10.114,9.696 -9.875,9.792 -9.63,9.792C-9.496,9.792 -9.362,9.764 -9.234,9.706L0.214,5.411C0.497,5.283 0.724,5.056 0.853,4.774L5.147,-4.676C5.312,-5.038 5.236,-5.456 4.955,-5.739C4.673,-6.021 4.255,-6.097 3.892,-5.931L-5.558,-1.637C-5.841,-1.508 -6.066,-1.281 -6.195,-0.998" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Compass;
