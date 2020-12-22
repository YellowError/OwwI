import Layout from "../components/Layout";
import Button from "../components/dashboard/Button";
import { useState, useEffect } from "react";
import ButtonAction from "../components/dashboard/ButtonAction";

const DashboardPage = ({ user, onLogout }) => {
  const pageTitle = "Dashboard";
  let fetchUser = {
    firstName: "Patrick",
    lastName: "Miroux",
    phone: "0496348231",
    email: "patrick.m@century.be",
    birthDate: "1986-12-21T09:08:10.702Z",
    registerNumber: "22222222",
    adressId: 0,
    photo: "string",
    agentCode: 0,
    agencyAdressId: 0,
    sector: "string",
    roles: [0, 2, 3],
  };
  const [etatUser, setEtatUser] = useState(fetchUser);

  // EXEMPLE DE COMMENT S'ATTENDRE A USER
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <Layout title={pageTitle} user={user}>
      <div className="logo md:block">
        <img src="./../images/logo_owwi.png" />
      </div>
      <div className="dashboard">
        {etatUser.roles.map((e) => {
          if (e == 3) {
            return (
              <>
                <Button
                  href="/create-agent"
                  nameBtn="Ajouter Agent"
                  src="./../images/btnAddAgentDashboard.svg"
                />
                <Button
                  href="/listing"
                  nameBtn="Liste Agents"
                  src="./../images/btnListAgentDashboard.svg"
                />
              </>
            );
          }
        })}
        {etatUser.roles.map((e) => {
          if (e == 2) {
            return (
              <>
                <Button
                  href="/create-client/idagent"
                  nameBtn="Ajouter client"
                  src="./../images/btnAddClientDashboard.svg"
                />
                <Button
                  href="/listing"
                  nameBtn="Liste clients"
                  src="./../images/btnListClientDashboard.svg"
                />
                <Button
                  href="/create-estimation/idclient"
                  nameBtn="Création estimation"
                  src="./../images/btnAddEstimationDashboard.svg"
                />
              </>
            );
          }
        })}
        <Button
          href="/listing"
          nameBtn="Liste estimation"
          src="./../images/btnListEstimationDashboard.svg"
        />
        <Button
          href={`/edit-profile/${user ? user.id : ""}`}
          nameBtn="Options"
          src="./../images/btnOptionDashboard.svg"
        />
        <ButtonAction
          onLogout={onLogout}
          nameBtn="Déconnexion"
          src="./../images/btnLogoutDashboard.svg"
        />
      </div>
    </Layout>
  );
};

export default DashboardPage;
