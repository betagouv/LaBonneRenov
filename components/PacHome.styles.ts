import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@media (max-width: 769px) {
  footer {
    .fr-container {
      padding-bottom: 136px;
    }
  }
}
`;

export const DesktopButton = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const DesktopTitle = styled.h1`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileTitle = styled.h3`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopSubTitle = styled.h2`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileSubTitle = styled.h5`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopImage = styled(Image)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileImage = styled(Image)`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  h1 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderExplanation = styled.div`
  margin-top: 48px;
  @media (min-width: 768px) {
    h5 {
      display: none;
    }
  }
`;

export const Explanations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;

  img {
    width: 36px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    img {
      width: 60px;
    }
  }

  div {
    border: 1px solid #dddddd;
    box-shadow: 0px 2px 6px rgba(0, 0, 18, 0.16);
    background-color: white;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: bold;
    @media (min-width: 768px) {
      width: calc(33% - 12px);
    }
  }
`;

export const Content = styled(HeaderContent)`
  border: 1px solid #dddddd;
  padding: 24px;
  height: 100%;
  font-size: 14px;
  img {
    display: none;
  }
  a {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    padding: 32px;
    font-size: 16px;
    a {
      font-size: 14px;
    }
    img {
      display: block;
    }
  }
`;

export const HeaderDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 32px;
  }
`;

export const HeaderDescriptionWithImage = styled(HeaderDescription)`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Hint = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #161616;
`;

export const MobileButton = styled.div`
  z-index: 2;
  display: block;
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    width: 100%;
    display: inline-block;
  }

  ${Hint} {
    padding: 16px;
    @media (min-width: 480px) {
      padding: 24px;
    }
  }
`;
