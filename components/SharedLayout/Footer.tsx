import React from 'react';
import {
  Footer as FooterDSFR,
  FooterBody,
  FooterBottom,
  FooterCopy,
  FooterLink,
  Icon,
  Logo,
} from '@dataesr/react-dsfr';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterDSFR>
      <FooterBody description="Mesurer l’impact des travaux de rénovation énergétique">
        <Logo
          splitCharacter={10}
          asLink={<Link href="/" title="Revenir à l'accueil" />}
        >
          République Française
        </Logo>
      </FooterBody>
      <FooterBottom>
        <FooterLink>Accessibilité: non conforme</FooterLink>
        <FooterLink target="_blank" href="https://github.com/betagouv/outibat">
          Github
        </FooterLink>
        <FooterCopy>licence etalab-2.0</FooterCopy>
      </FooterBottom>
    </FooterDSFR>
  );
};

export default Footer;
