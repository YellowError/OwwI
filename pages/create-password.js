import Layout from "../components/Layout";

const CreatePasswordPage = ({ user, onLogout }) => {

    const pageTitle = "Create Password";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default CreatePasswordPage;
