import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Owwi";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name={siteTitle}
          content="Application permettant de générer une estimation de bien immobilier."
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
