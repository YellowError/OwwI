import { useRouter } from "next/router"
import Layout from "../../components/Layout";
import EditClient from "../../components/edit-profile/EditProfile";

const EditProfilePage = ({ user, onLogout }) => {

  const pageTitle = "Edit Profile";
  const router = useRouter();
  const { idClient } = router.query;

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <p>{idClient}</p>
      <section>
        <EditClient />
      </section>

    </Layout>
  );
};

export default EditProfilePage;
