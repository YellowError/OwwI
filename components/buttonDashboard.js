import next from "next";
import React from "react";
import Link from "next/link";

const ButtonDashboard = ({status, icon= "logo_owwi.svg", label = "Titre bouton", link = "#"}) => {

  return (
    <div className="btnDashboard" >
      <a href={link}>
        <div className="iconDashboard">
          <img src={`images/${icon}`} />
        </div>
        <label className="labelDashboard ">{label}</label>
      </a>
    </div>
  );
};



export default ButtonDashboard;
