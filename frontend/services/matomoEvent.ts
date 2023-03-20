/* eslint-disable no-underscore-dangle */

declare global {
  interface Window {
    _paq: any;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const FRANCE_RENNOV = 'france_rennov';

const matomoEvent = (values: string[]) => {
  if (!values || values.length === 0) {
    console.warn(
      'matomoEvent > Event Params is required - Event is not send to Matomo'
    );
    return;
  }

  if (typeof window?._paq?.push === 'function') {
    window._paq.push(['trackEvent', ...values]);
  }
};

export default matomoEvent;
