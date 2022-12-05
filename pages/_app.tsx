import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/SharedLayout/Header';
import Footer from '../components/SharedLayout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Outibat</title>
        <meta
          name="description"
          content="Mesurer l’impact des travaux de rénovation énergétique"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
