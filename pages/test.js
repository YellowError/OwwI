import React from "react";
import MenuMobile from "../components/MenuMobile";
import SvgsMenuMobile from "../components/SvgsMenu";
import Position from "../common/Position";

function test() {
  const mainButton = {
    title: "mainButtonTitle",
    svg: "createEstimation",
    logic: () => {
      console.log(`remove me`);
    },
  };

  // const buttons = [
  //   {title: "createAgent", position: Position.Left , cible: "create-agent"},
  //   {title: "createEstimation", position: Position.Left ,id: 2, cible: "create-estimation"},
  //   {title: "createClient", position: Position.Right ,id: 3, cible: "create-client"},
  //   {title: "back", position: Position.Right , cible: "dashboard"},
  // ];

  const tryCatchValue = (e) => {
    e.preventDefault();
    let formObjectToSend = {};
    const form = document.forms["test"];
    for (let i = 0; i < form.length; i++) {
      if (form[i].name) {
        // let newObj = {
        //   value: form[i].name,
        // };
        let newObj = {};
        newObj.value = form[i].value;
        formObjectToSend[form[i].name] = newObj;
      }
    }
    console.log(form["drone"]);
    console.log(formObjectToSend);
  };
  const buttons = [
    {
      title: "createAgent",
      position: Position.Left,
      cible: "create-agent",
      id: 3,
    },
    {
      title: "createClient",
      position: Position.Left,
      id: 3,
      cible: "create-client",
    },
    {
      title: "createEstimation",
      position: Position.Left,
      id: 2,
      cible: "create-estimation",
    },
    { title: "options", position: Position.Left, id: 2, cible: "dashboard" },
    { title: "lstEstimation", position: Position.Right, cible: "dashboard" },
    { title: "lstClient", position: Position.Left, cible: "dashboard" },
    { title: "lstAgent", position: Position.Right, cible: "dashboard" },
    { title: "validate", position: Position.Right, cible: "dashboard" },
    { title: "back", position: Position.Right, cible: "dashboard" },
    { title: "next", position: Position.Right, cible: "dashboard" },
    { title: "logOut", position: Position.Right, cible: "dashboard" },
  ];

  return (
    <>
      <div>
        {/* <MenuMobile buttons={{createAgent:true}} /> */}
        {/* <MenuMobile ids={{estimation:3}} buttons={{createAgent:true,createClient:true,createEstimation:true,home:true,backButton:true}}/> */}
        <div className="h-96 w-full"></div>
        <MenuMobile mainButton={mainButton} buttons={buttons} />
      </div>

      <form name="test">
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>
        <button onClick={tryCatchValue}>click</button>
      </form>
    </>
  );
}

export default test;
