import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import LinkIndex from "../components/linkIndex";
import LogoIndex from "../components/LogoIndex";

export default function index_principal() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LogoIndex />

      <section className="mx-auto flex flex-col my-20xp max-w-sm  ">
        <LinkIndex cheminLink="/index/about" className="btn btnBlue">
          Qu'est ce que c'est ?
        </LinkIndex>

        <LinkIndex cheminLink="/index/privacy">Réglement général</LinkIndex>

        <LinkIndex cheminLink="/index/contact">Contacter l'agence</LinkIndex>

        <LinkIndex cheminLink="/" className="bg-red-700">
          Me connecter
        </LinkIndex>
      </section>
    </Layout>
  );
}
