import React from "react";
import Link from "next/link";
const EstimationClient = ({ clientLinked, hidden }) => {
  return (
    <>
      <div className={hidden}>
        <h2>Lier l’estimation à un client</h2>
        <Link href="/create-client">
          <button className="btn btnBlue">Nouveau client</button>
        </Link>
        <select name="ownerId">
          {clientLinked
            ? clientLinked.map((client, index) => {
                return (
                  <option key={index} value={client.id}>
                    {client.firstName} {client.lastName}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
    </>
  );
};
export default EstimationClient;
