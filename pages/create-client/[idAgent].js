import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AddClient from "../../components/create-client/AddClient";
import Position from "../../common/Position";
import MenuMobile from "../../components/MenuMobile";

const CreateClientPage = ({ user }) => {
  const pageTitle = "Create Client";
  const router = useRouter();
  const { idAgent } = router.query;
  const mainButton = {
    link: "/create-estimation",
    svg: "createEstimation",
    style: "",
    logic: () => {},
  };
  const buttons = [
    {
      title: "createAgent",
      position: Position.Left,
      cible: "/create-agent/",
    },
    { title: "logOut", position: Position.Right, cible: "/dashboard" },
  ];

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <p>idAgent : {idAgent}</p>
      <section>
        <AddClient />
        <div className="w-full">
          <MenuMobile mainButton={mainButton} buttons={buttons} />
        </div>
      </section>
    </Layout>
  );
};

export default CreateClientPage;
