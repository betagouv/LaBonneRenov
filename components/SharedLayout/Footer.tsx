import React from 'react';
import {
  Footer as FooterDSFR,
  FooterBody,
  FooterBottom,
  FooterCopy,
  FooterLink,
  Logo,
} from '@dataesr/react-dsfr';
import Link from 'next/link';

function Footer() {
  return (
    <FooterDSFR>
      <FooterBody description="Des travaux de rénovations énergétiques plus performants">
        <Logo
          splitCharacter={10}
          asLink={<Link href="/" title="Revenir à l'accueil" />}
        >
          République Française
        </Logo>
      </FooterBody>
      <FooterBottom>
        <FooterLink>Accessibilité: non conforme</FooterLink>
        <FooterLink asLink={<Link href="/statistiques" title="Statistiques" />}>
          Statistiques
        </FooterLink>
        <FooterLink target="_blank" href="https://github.com/betagouv/outibat">
          Github
        </FooterLink>
        <FooterCopy>
          Sauf mention contraire, tous les contenus de ce site sont sous{' '}
          <Link
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
            rel="noreferrer"
          >
            licence etalab-2.0
          </Link>
        </FooterCopy>
      </FooterBottom>
    </FooterDSFR>
  );
}

export default Footer;
