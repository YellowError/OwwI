import Layout from "../components/Layout";
import AddAgent from "../components/create-agent/AddAgent";
import MenuMobile from "../components/MenuMobile";
import Position from "../common/Position";

const CreateAgentPage = ({ user }) => {
  const pageTitle = "Create Agent";
  const mainButton = {
    link: "/create-estimation/15",
    svg: "createEstimation",
    style: "",
    logic: () => {},
  };
  const buttons = [
    {
      title: "createClient",
      position: Position.Right,
      cible: "/create-client/2",
    },
    { title: "logOut", position: Position.Right, cible: "/dashboard" },
  ];

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section>
        <AddAgent />
        <div className="w-full">
          <MenuMobile mainButton={mainButton} buttons={buttons} />
        </div>
      </section>
    </Layout>
  );
};

export default CreateAgentPage;
