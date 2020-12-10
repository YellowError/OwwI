import {useRouter} from 'next/router';
import Layout from "../../components/Layout";

const DetailsEstimationPage = ({ user, onLogout }) => {

    const pageTitle = "Details Estimation";
    const router = useRouter();
    const { idEstimation } = router.query;

    return (
      <Layout title={pageTitle} user={user} publicContent>
        <p>Id estimation : {idEstimation}</p>
        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default DetailsEstimationPage;
