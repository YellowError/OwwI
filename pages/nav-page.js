import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const NavPage = ({ user, onLogout }) => {
  const pageTitle = "nav";
  // console.log(user ? user : "Still no user");

  return (
    <Layout title={pageTitle} user={user}>
      <Navbar user={user} onLogout={onLogout} />

      <span>Hi.</span>
    </Layout>
  );
};

export default NavPage;
