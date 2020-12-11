import Layout from "../components/Layout";
import AddAgent from "../components/create-agent/AddAgent";


const CreateAgentPage = ({ user }) => {

  const pageTitle = "Create Agent";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section>
        <AddAgent />
      </section>
    </Layout>
  );
}

export default CreateAgentPage;
