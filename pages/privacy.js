import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

export default function index_privacy() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
