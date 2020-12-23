import Layout from "../components/Layout";
import LinkIndex from "../components/LinkIndex";
import LogoIndex from "../components/LogoIndex";

const ContactPage = ({ user }) => {
  const pageTitle = "Contact";

  return (
    <Layout title={pageTitle} user={user} publicContent>
      <LogoIndex />

      <section className="w-64 mx-auto flex flex-col items-center p-3">
        <h3 className="   text-blue-900 font-bold text-base mb-3">
          Contacter l'agence
        </h3>
        <div className="">
          <p className="">Adresse: Rue Henri 23, 7320 Bruxelles</p>
          <p className=""> Tel: 065 00 11 22 </p>
        </div>
        <LinkIndex
          cheminLink="/"
          style={"btn btnRed text-center w-32 flex justify-center mt-6"}
        >
          Retour
        </LinkIndex>
      </section>
    </Layout>
  );
};

export default ContactPage;
