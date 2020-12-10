import { useRouter } from "next/router"
import Layout from "../../components/Layout";

const EditProfilePage = ({ user, onLogout }) => {

    const pageTitle = "Edit Profile";
    const router = useRouter();
    const {idUser} = router.query;

    return (
      <Layout title={pageTitle} user={user} publicContent>
        <p>{idUser}</p>
        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default EditProfilePage;
