import Layout from "../components/Layout";

const EditProfilePage = ({ user, onLogout }) => {

    const pageTitle = "Edit Profile";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default EditProfilePage;
