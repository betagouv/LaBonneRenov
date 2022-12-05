import React from 'react';
import {
  Header as DSFRHeader,
  HeaderBody,
  Logo,
  Service,
} from '@dataesr/react-dsfr';
import Link from 'next/link';

const Header = () => {
  return (
    <DSFRHeader>
      <HeaderBody>
        <Logo splitCharacter={10}>République Française</Logo>
        <Service
          title="Outibat"
          description="Mesurer l’impact des travaux de rénovation énergétique"
          asLink={<Link href="/" title="Revenir à l'accueil" />}
        />
      </HeaderBody>
    </DSFRHeader>
  );
};

export default Header;
