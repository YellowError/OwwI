import React, { useState } from "react";
import FloatingInput from "../components/floatingInput";
import StepNavMenu from "../components/stepNavMenu";
import ButtonDashboard from "../components/buttonDashboard";
import Compass from "../components/create-estimation/compass";

const test = () => {
  return (
    <div className="flex flex-col">
      <button className="btn btnRed">Rouge</button>
      <button className="btn btnBlue">Bleu</button>
      <button className="btn btnGreen">Vert</button>

      <form>
        <FloatingInput label="prénom" type="text" htmlForAndId="lastName" />
        <FloatingInput label="nom" type="password" />
      </form>
      <nav>
        <ul className="flex filArial">
          <li>
            <a className="linkArialHome" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="linkArial" href="#">
              1ere étape
            </a>
          </li>
          <li>
            <a className="linkArial" href="#">
              2eme étape
            </a>
          </li>
        </ul>
      </nav>

      <StepNavMenu />

      <ButtonDashboard />
      <ButtonDashboard icon="little_logo_owwi.svg" label="Ajouter Client" link="http://google.com" />

      <Compass/>

    </div>
  );
};

export default test;
