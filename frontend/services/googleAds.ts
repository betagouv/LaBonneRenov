function gtag(...args: any[]) {
  window.dataLayer.push(args);
}

const googleId = 'AW-11121531932';

export const initGoogleAds = () => {
  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', googleId);
};

export const googleAdsConversion = () => {
  gtag('event', 'conversion', {
    send_to: `${googleId}/YykcCJeFx5IYEJy4lLcp`,
  });
};
