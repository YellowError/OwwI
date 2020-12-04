import React, { useState } from "react";
import FloatingInput from "../components/floatingInput";
import Image from "../components/image";
import StepNavMenu from "../components/stepNavMenu";

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
    </div>
  );
};

export default test;
