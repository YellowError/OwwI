import Layout from "../components/Layout";
import AddAgent from "../components/create-agent/AddAgent";
import MenuMobile from "../components/MenuMobile";
import Position from "../common/Position";

const CreateAgentPage = ({ user, onLogout }) => {
  const pageTitle = "Create Agent";
  const mainButton = {
    link: "/create-estimation",
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
      <section className="mb-16 md:mb-24">
        <AddAgent />
        <div className="container md:h-24 fixed bottom-0">
          <MenuMobile
            onLogout={onLogout}
            mainButton={mainButton}
            buttons={buttons}
          />
        </div>
      </section>
    </Layout>
  );
};

export default CreateAgentPage;
