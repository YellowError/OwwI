import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import AddAgent from "../components/create-agent/AddAgent";

import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <AddAgent />
      </section>
    </Layout>
  );
}
