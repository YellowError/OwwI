import Layout from "../components/Layout";
import FormConnection from "../components/login/FormConnection";
import EndpointType from "../common/endpoint-type";

const LoginPage = ({ user, onLoginSucess, onLogout, onNotification }) => {
  const pageTitle = "Login";

  return (
    <Layout title={pageTitle} publicContent>
      {/* <Navbar user={user} onLogout={onLogout} /> */}

      <FormConnection
        title={pageTitle}
        endpoint={EndpointType.Login}
        onLoginSucess={onLoginSucess}
        onNotification={onNotification}
      />
    </Layout>
  );
};

export default LoginPage;
