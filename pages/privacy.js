import Layout from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

const PrivacyPage = ({ user }) => {

  const pageTitle = "Privacy";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <LogoIndex />

      <section>
        <div>
          <h1 className="text-blue-900 font-bold ">
            RGPD - Conditions générales
          </h1>
          <p>
            Le règlement nᵒ 2016/679, dit règlement général sur la protection
            des données, est un règlement de l'Union européenne qui constitue le
            texte de référence en matière de protection des données à caractère
            personnel. Il renforce et unifie la protection des données pour les
            individus au sein de l'Union européenne. Wikipédia
          </p>
        </div>
        <LinkIndex cheminLink="/principal">Retour</LinkIndex>
      </section>
    </Layout>
  );
}

export default PrivacyPage;
