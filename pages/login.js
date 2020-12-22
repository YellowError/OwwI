import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import FormConnection from "../components/login/FormConnection";
import EndpointType from "../common/endpoint-type";

const LoginPage = ({ user, onLoginSucess, onLogout, onNotification, requestServer }) => {
  const pageTitle = "Login";
  const router = useRouter();

  useEffect(() => {
    if (user)
      router.push("/dashboard");
  }, [user]);

  return (
    <Layout title={pageTitle} publicContent>
      {/* <Navbar user={user} onLogout={onLogout} /> */}

      <FormConnection
        title={pageTitle}
        endpoint={EndpointType.Login}
        onLoginSucess={onLoginSucess}
        onNotification={onNotification}
        requestServer={requestServer}
      />
    </Layout>
  );
};

export default LoginPage;
