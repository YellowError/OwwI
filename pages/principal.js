import Layout from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

const PrincipalPage = ({ user }) => {
  const pageTitle = "Principal";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <LogoIndex />

      <section className="mx-auto flex flex-col items-center my-20 max-w-sm p-3">
        <LinkIndex
          cheminLink="/about"
          style={"btnRoundedMd btnBlue w-64 text-center"}
        >
          Qu'est ce que c'est ?
        </LinkIndex>

        <LinkIndex
          cheminLink="/privacy"
          style={"btnRoundedMd btnBlue w-64 text-center"}
        >
          Réglement général
        </LinkIndex>

        <LinkIndex
          cheminLink="/contact"
          style={"btnRoundedMd btnBlue w-64 text-center"}
        >
          Contacter l'agence
        </LinkIndex>

        <LinkIndex
          cheminLink="login"
          style={"btnRoundedMd btnRed w-64 text-center"}
        >
          Me connecter
        </LinkIndex>
      </section>
    </Layout>
  );
};

export default PrincipalPage;
