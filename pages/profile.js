import Layout from "../components/Layout";

const ProfilePage = ({ user, onLogout }) => {

    const pageTitle = "Profile";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default ProfilePage;
