import Layout from "../components/Layout";
import FormConnection from "../components/login/FormConnection";
import Navbar from "../components/Navbar";
import EndpointType from '../common/endpoint-type';

const RegisterPage = ({ user, onLoginSucess, onLogout, onNotification }) => {

    const pageTitle = "Register";

    return (
    <Layout title={pageTitle} publicContent>

        <Navbar user={user} onLogout={onLogout} />

        <FormConnection title={pageTitle} endpoint={EndpointType.Register} onLoginSucess={onLoginSucess} onNotification={onNotification} />

    </Layout>
    );
};

export default RegisterPage;