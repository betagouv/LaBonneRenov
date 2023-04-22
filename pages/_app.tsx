import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createNextDsfrIntegrationApi } from '@codegouvfr/react-dsfr/next-pagesdir';
import { ConsentBanner } from '@codegouvfr/react-dsfr/ConsentBanner';
import Header from '../components/SharedLayout/Header';
import Footer from '../components/SharedLayout/Footer';
import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css';
import GlobalStyle from '../components/SharedLayout/Global.styles';
import { useStore } from '../frontend/stores';
import { initGoogleAds } from '../frontend/services/googleAds';

declare module '@codegouvfr/react-dsfr/gdpr' {
  interface RegisterGdprServices {
    'mandatory-cookie-consumer': true;
    'cookie-matomo': never;
    'cookie-hotjar': never;
    'cookie-google': never;
  }
}

declare module '@codegouvfr/react-dsfr/next-pagesdir' {
  interface RegisterLink {
    Link: typeof Link;
  }
}

const { withDsfr, dsfrDocumentApi } = createNextDsfrIntegrationApi({
  defaultColorScheme: 'light',
  Link,
});

export { dsfrDocumentApi };

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

const App = ({ Component, pageProps }: AppProps) => {
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
      <ConsentBanner
        gdprLinkProps={{ href: '#' }}
        services={[
          {
            name: 'mandatory-cookie-consumer',
            title: 'La Bonne rénov` 🍪',
            description: 'Cookies essentiels au bon fonctionnement du site.',
            mandatory: true,
          },
          {
            name: 'cookie-matomo',
            title: 'Matomo',
            description:
              "Service nous permettant de suivre l'utilisation du site.",
          },
          {
            name: 'cookie-hotjar',
            title: 'Hotjar',
            description:
              'Service nous permettant de vous fournir une meilleure experience utilisateur.',
          },
          {
            name: 'cookie-google',
            title: 'Google ads',
            description:
              "Service nous permettant d'optimiser l'affichage de nos pubs google.",
          },
        ]}
        siteName="La Bonne Renov`"
      />
      <Head>
        <title>{content.title}</title>
        <meta property="og:title" content={content.title} />
        <meta name="description" content={content.description} />
        <meta property="og:description" content={content.description} />
        <link rel="icon" href="/favicon.svg" />
        <script
          type="text/javascript"
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
        <script
          type="text/javascript"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                /* Crisp */
                window.$crisp=[];
                window.CRISP_WEBSITE_ID="a773553c-07e5-4c2e-b0f7-f7946ce35435";
                (function(){d=document;s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
                })();`,
          }}
        />
        <script
          type="text/javascript"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r) {
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3455550,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');
              r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
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
};

export default withDsfr(App);
