import Layout from "../components/Layout";

const DetailsEstimationPage = ({ user, onLogout }) => {

    const pageTitle = "Details Estimation";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default DetailsEstimationPage;
