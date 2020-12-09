import Layout from "../components/Layout";

const DashboardPage = ({ user, onLogout }) => {

    const pageTitle = "Dashboard";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default DashboardPage;
