import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import LinkIndex from "../components/linkIndex";
import LogoIndex from "../components/LogoIndex";

export default function index_presentation() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LogoIndex />

      <section className="">
        <h1 className="text-blue-900 font-bold flex justify-center">
          qu'est ce que c'est ?
        </h1>

        <p>
          Une application mobile est un logiciel applicatif développé pour un
          appareil électronique mobile, tel qu'un assistant personnel, un
          téléphone portable, un smartphone, un baladeur numérique, une tablette
          tactile, ou encore certains ordinateurs fonctionnant avec le système
          d'exploitation Windows Phone ou
        </p>

        <LinkIndex cheminLink="/index/principal"> Retour</LinkIndex>
      </section>
    </Layout>
  );
}
