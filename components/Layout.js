import Head from "next/head";
import LayoutConnected from "./LayoutConnected";

const Layout = ({ title, user, children, publicContent }) => {

    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name={title}
                content="Application permettant de générer une estimation de bien immobilier."
            />
            <title>{title}</title>
        </Head>

        { publicContent ? (
            <main className="container mx-auto">{children}</main>
        ) : (
            <LayoutConnected user={user}>{children}</LayoutConnected>
        )}
    </>
    );
};

export default Layout;