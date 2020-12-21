import React from 'react'
import MenuMobile from '../components/MenuMobile'
import SvgsMenuMobile from "../components/SvgsMenu"
import Position from "../common/Position"

function test() {
  const mainButton = {
    title: "mainButtonTitle",
    svg: "createEstimation",
    logic: () => { console.log(`remove me`) }
  };

  
  // const buttons = [
  //   {title: "createAgent", position: Position.Left , cible: "create-agent"},
  //   {title: "createEstimation", position: Position.Left ,id: 2, cible: "create-estimation"},
  //   {title: "createClient", position: Position.Right ,id: 3, cible: "create-client"},
  //   {title: "back", position: Position.Right , cible: "dashboard"},
  // ];

  const buttons = [
    {title: "createAgent", position: Position.Left , cible: "create-agent"},
    {title: "createClient", position: Position.Left ,id: 3, cible: "create-client"},
    {title: "createEstimation", position: Position.Left ,id: 2, cible: "create-estimation"},
    {title: "options", position: Position.Left ,id: 2, cible: "dashboard"},
    {title: "lstEstimation", position: Position.Right , cible: "dashboard"},
    {title: "lstClient", position: Position.Left , cible: "dashboard"},
    {title: "lstAgent", position: Position.Right , cible: "dashboard"},
    {title: "validate", position: Position.Right , cible: "dashboard"},
    {title: "back", position: Position.Right , cible: "dashboard"},
    {title: "next", position: Position.Right , cible: "dashboard"},
    {title: "logOut", position: Position.Right , cible: "dashboard"},
  ];

  return (
    <div>
      {/* <MenuMobile buttons={{createAgent:true}} /> */}
      {/* <MenuMobile ids={{estimation:3}} buttons={{createAgent:true,createClient:true,createEstimation:true,home:true,backButton:true}}/> */}
      <div className="h-96 w-full"></div><MenuMobile mainButton={mainButton} buttons={buttons} />
    </div>
  )
}

export default test
