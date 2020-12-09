import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const IndexPage = ({ user, onLogout }) => {

    const pageTitle = "Index";

    return (
      <Layout title={pageTitle} user={user} publicContent>
      
        <Navbar user={user} onLogout={onLogout} />

        <span>Hi.</span>

      </Layout>
    );
};

export default IndexPage;
