import React from 'react';
import {
  Badge,
  Header as DSFRHeader,
  HeaderBody,
  Logo,
  Service,
} from '@dataesr/react-dsfr';
import Link from 'next/link';
import { observer } from 'mobx-react';

function Header() {
  return (
    <DSFRHeader>
      <HeaderBody>
        <Logo splitCharacter={10}>République Française</Logo>
        <Service
          title={
            <>
              La bonne rénov&lsquo;
              <Badge text="Bêta" colorFamily="green-emeraude" />
            </>
          }
          description="Mesurer l’impact des travaux de rénovation énergétique"
          asLink={<Link href="/" title="Revenir à l'accueil" />}
        />
      </HeaderBody>
    </DSFRHeader>
  );
}

export default observer(Header);
