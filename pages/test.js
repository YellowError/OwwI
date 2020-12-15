import React from "react";
import Layout from "../components/Layout";
import FloatingInput from "../components/for-all-form/FloatingInput";
import StepNavMenu from "../components/create-estimation/StepNavMenu";
import Compass from "../components/create-estimation/Compass";
import ButtonTitle from "../components/for-all-form/ButtonTitle";
import InputSwitch from "../components/for-all-form/InputSwitch";
import ButtonDashboard from "../components/dashboard/ButtonDashboard";
import OpenCloseChevron from "../components/listing/OpenCloseChevron";

const TestPage = ({ user }) => {
  const pageTitle = "Test";
  // TEST voir si ça s'envoie
  const regardezMoi = (e) => {
    e.preventDefault();
    const {
      compassValue: { value: compassValue },
    } = e.target.elements;
    console.log(compassValue);
  };

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <div className="flex flex-col container mx-auto">
        <button className="btn btnRed">Rouge</button>
        <button className="btn btnBlue">Bleu</button>
        <button className="btn btnGreen">Vert</button>

        <form>
          <FloatingInput label="prénom" type="text" htmlForAndId="lastName" />
          <FloatingInput label="nom" type="password" />
        </form>
        <nav>
          <ul className="flex filArianne">
            <li>
              <a className="linkArianneHome" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="linkArianne" href="#">
                1ere étape
              </a>
            </li>
            <li>
              <a className="linkArianne" href="#">
                2eme étape
              </a>
            </li>
          </ul>
        </nav>

        <StepNavMenu />

        <ButtonDashboard />
        <ButtonDashboard
          icon="images/little_logo_owwi.svg"
          label="Ajouter Client"
          link="http://google.com"
        />
        <ButtonDashboard
          icon="images/add_agent.svg"
          label="Ajouter agent"
          link="http://google.com"
        />

        <ButtonTitle name="gender" label="Sélectionner le titre" />
        <form onSubmit={regardezMoi}>
          <Compass />
          <button type="submit">Envoyer</button>
        </form>
        <nav className="my-6">
          <ul className="flex">
            <svg
              className="svgPagination rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
              width="0.4rem"
              viewBox="0 0 15 25"
            >
              <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                  <g transform="matrix(-1,0,0,1,170.316,684.643)">
                    <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                  </g>
                </g>
              </g>
            </svg>
            <li className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center">
              1
            </li>
            <li className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center">
              2
            </li>
            <li className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center">
              3
            </li>
            <li className="rounded-full regularLink p-2 mx-2 w-8 h-8 bg-white flex justify-center items-center">
              4
            </li>
            <svg
              className="svgPagination rounded-full p-2 mx-2 w-12 h-8 bg-white flex justify-center items-center"
              width="0.4rem"
              viewBox="0 0 15 25"
            >
              <g transform="matrix(1,0,0,1,-2226.41,-1801.25)">
                <g transform="matrix(2.66667,0,0,2.66667,1785.83,0)">
                  <g transform="matrix(1,0,0,1,165.39,684.643)">
                    <path d="M0,-9.003C-0.23,-8.774 -0.23,-8.398 0,-8.168L3.666,-4.501L0,-0.835C-0.23,-0.606 -0.23,-0.23 0,0C0.229,0.229 0.604,0.229 0.835,0L4.879,-4.044C4.894,-4.057 4.912,-4.062 4.927,-4.075C5.044,-4.192 5.1,-4.347 5.098,-4.501C5.1,-4.655 5.044,-4.81 4.927,-4.927C4.912,-4.941 4.894,-4.946 4.879,-4.959L0.835,-9.003C0.604,-9.232 0.229,-9.232 0,-9.003" />
                  </g>
                </g>
              </g>
            </svg>
          </ul>
        </nav>
        <InputSwitch
          name="electric"
          label="électricité à refaire"
          idfor="elec"
        />
        <OpenCloseChevron />
      </div>
    </Layout>
  );
};

export default TestPage;
