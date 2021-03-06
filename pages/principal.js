import Layout from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

const PrincipalPage = ({ user }) => {

  const pageTitle = "Principal";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <LogoIndex />

      <section className="mx-auto flex flex-col my-20xp max-w-sm  ">
        <LinkIndex cheminLink="/about" className="btn btnBlue">
          Qu'est ce que c'est ?
        </LinkIndex>

        <LinkIndex cheminLink="/privacy">Réglement général</LinkIndex>

        <LinkIndex cheminLink="/contact">Contacter l'agence</LinkIndex>

        <LinkIndex cheminLink="/" className="bg-red-700">
          Me connecter
        </LinkIndex>
      </section>
    </Layout>
  );
}

export default PrincipalPage;
