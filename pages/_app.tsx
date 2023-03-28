import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Header from '../components/SharedLayout/Header';
import Footer from '../components/SharedLayout/Footer';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';
import GlobalStyle from '../components/SharedLayout/Global.styles';
import { useStore } from '../frontend/stores';
import { initGoogleAds } from '../frontend/services/googleAds';

const metaData: Record<string, { title: string; description: string }> = {
  default: {
    title: "La Bonne Rénov'",
    description: 'Des travaux de rénovations énergétiques plus performants',
  },
  '/contactexpert': {
    title: "Votre rénovation énergétique avec La Bonne Rénov'",
    description:
      "Profitez d'un échange gratuit et en direct avec votre service public. Nous répondons à vos questions et vous conseillons sur votre projet de rénovation.",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const { init } = useStore();
  const router = useRouter();

  useEffect(() => {
    init(window.localStorage.getItem('questionnaires_id'));
  }, [init]);

  useEffect(() => {
    initGoogleAds();
  }, []);

  const CrispWithNoSSR = dynamic(() => import('../components/Crisp'), {
    ssr: false,
  });

  const content = metaData[router.pathname] || metaData.default;
  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta property="og:title" content={content.title} />
        <meta name="description" content={content.description} />
        <meta property="og:description" content={content.description} />
        <link rel="icon" href="/favicon.svg" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              /* Matomo */
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://stats.data.gouv.fr/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '282']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
              })();
              `,
          }}
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11121531932"
      />
      <Header />
      <CrispWithNoSSR />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
