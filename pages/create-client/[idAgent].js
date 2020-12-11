import {useRouter} from 'next/router';
import Layout from "../../components/Layout";
import AddClient from "../../components/create-client/AddClient";

const CreateClientPage = ({ user }) => {

  const pageTitle = "Create Client";
  const router = useRouter();
  const { idAgent } = router.query;

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <p>idAgent : {idAgent}</p>
      <section>
        <AddClient />
      </section>
    </Layout>
  );
}

export default CreateClientPage;
