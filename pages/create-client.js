import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import AddClient from '../components/create-client/AddClient'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                {/* <p><Link href="/url">Hi.</Link></p> */}

                <AddClient />
            </section>
        </Layout>
    )
}