import { Layout } from '../components/Layout';
import Head from 'next/head';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Prisma Blog</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
