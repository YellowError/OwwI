import React from "react";
import Link from "next/link";
import InputSearch from "../for-all-form/InputSearch";
const EstimationClient = () => {
  return (
    <>
      <h2>Lier l’estimation à un client</h2>
      <Link href="/create-client">
        <button className="btn btnBlue">Nouveau client</button>
      </Link>
      <InputSearch placeholder="Client existant" />
    </>
  );
};
export default EstimationClient;
