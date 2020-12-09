import next from "next";
import React from "react";
import Link from "next/link";

const ButtonDashboard = ({
  status,
  icon = "images/logo_owwi.svg",
  label = "Titre bouton",
  link = "#",
}) => {
  return (
    <div className="btnDashboard">
      <Link href={link}>
        <div>
          <div className="iconDashboard">
            <img src={icon} />
          </div>
          <label>{label}</label>
        </div>
      </Link>
    </div>
  );
};

export default ButtonDashboard;
