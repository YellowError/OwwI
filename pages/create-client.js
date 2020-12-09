import Layout from "../components/Layout";
import AddClient from "../components/create-client/AddClient";

const CreateClientPage = ({ user }) => {

  const pageTitle = "Create Client";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <section>
        <AddClient />
      </section>
    </Layout>
  );
}

export default CreateClientPage;
