import Layout from "../components/Layout";

const EditFormPage = ({ user, onLogout }) => {

    const pageTitle = "Edit Form";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default EditFormPage;
