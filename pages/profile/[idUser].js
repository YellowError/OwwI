import {useRouter} from 'next/router';
import Layout from "../../components/Layout";

const ProfilePage = ({ user, onLogout }) => {

    const pageTitle = "Profile";
    const router = useRouter();
    const { idUser } = router.query;


    return (
      <Layout title={pageTitle} user={user} publicContent>
        <p>Id User : {idUser}</p>
        <span>Nothing to see here.</span>

      </Layout>
    );
};

export default ProfilePage;
