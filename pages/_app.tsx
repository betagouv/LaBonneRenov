import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/SharedLayout/Header';
import Footer from '../components/SharedLayout/Footer';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';
import GlobalStyle from '../components/SharedLayout/Global.styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>La bonne rénov&lsquo;</title>
        <meta
          name="description"
          content="Mesurer l’impact des travaux de rénovation énergétique"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
