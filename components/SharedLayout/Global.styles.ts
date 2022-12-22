import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 40px !important;
    font-weight: 700 !important;
    line-height: 48px !important;
    margin-bottom: 32px !important;
  }

  h2 {
    font-size: 32px !important;
    font-weight: 700 !important;
    line-height: 40px !important;
    margin-bottom: 24px !important;
  }

  h3 {
    font-size: 28px !important;
    font-weight: 700 !important;
    line-height: 36px !important;
    margin-bottom: 24px !important;
  }

  h4 {
    font-size: 24px !important;
    font-weight: 700 !important;
    line-height: 32px !important;
    margin-bottom: 8px !important;
  }
`;

export default GlobalStyle;
