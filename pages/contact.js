import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

export default function index_contact_agence() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LogoIndex />

      <section>
        <h3 className="   text-blue-900 font-bold text-base">
          Contacter l'agence
        </h3>
        <div className="">
          <p className="">Adresse: Rue Henri 23, 7320 Bruxelles</p>
          <p className=""> Tel: 065 00 11 22 </p>
        </div>
        <LinkIndex cheminLink="/principal" className="btn btn-red">
          Retour
        </LinkIndex>
      </section>
    </Layout>
  );
}
