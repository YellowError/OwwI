import Layout from "../components/Layout";

const ListingPage = ({ user, onLogout }) => {

    const pageTitle = "Listing";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default ListingPage;
