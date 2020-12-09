import Layout from "../components/Layout";

const ForgetPasswordPage = ({ user, onLogout }) => {

    const pageTitle = "Forget Password";

    return (
      <Layout title={pageTitle} user={user} publicContent>

        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default ForgetPasswordPage;
