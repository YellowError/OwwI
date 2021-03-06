import Layout from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

const AboutPage = ({ user }) => {

  const pageTitle = "About";

  return (
    <Layout title={pageTitle} user={user} publicContent>
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

        <LinkIndex cheminLink="/principal"> Retour</LinkIndex>
      </section>
    </Layout>
  );
}

export default AboutPage;
