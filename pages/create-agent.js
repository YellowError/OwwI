import Layout from "../components/Layout";
import AddAgent from "../components/create-agent/AddAgent";
import MenuMobile from "../components/MenuMobile";
import Position from "../common/Position";

const CreateAgentPage = ({ user }) => {
  const pageTitle = "Create Agent";
  const mainButton = {
    link: "create-estimation/15",
    svg: "createEstimation",
    logic: () => {},
  };
  const buttons = [
    {
      title: "createClient",
      position: Position.Right,
      cible: "create-client",
    },
    { title: "logOut", position: Position.Right, cible: "dashboard" },
  ];

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section>
        <AddAgent />
        <div className="w-full"></div>
        <MenuMobile mainButton={mainButton} buttons={buttons} />
      </section>
    </Layout>
  );
};

export default CreateAgentPage;
