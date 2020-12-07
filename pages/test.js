import React from "react";
import FloatingInput from "../components/floatingInput";
import StepNavMenu from "../components/stepNavMenu";
import ButtonDashboard from "../components/buttonDashboard";
import Compass from "../components/create-estimation/compass";
import InputTrueFalse from "../components/inputTrueFalse";
import InputTrueFalseSwitch from "../components/inputTrueFalseSwitch";

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
      <ButtonDashboard
        icon="little_logo_owwi.svg"
        label="Ajouter Client"
        link="http://google.com"
      />
      <ButtonDashboard
        icon="add_agent.svg"
        label="Ajouter agent"
        link="http://google.com"
      />

      <Compass />

      <InputTrueFalse name="electric" label="électricité à refaire" />
      <InputTrueFalseSwitch name="electric" label="électricité à refaire" />
    </div>
  );
};

export default test;
