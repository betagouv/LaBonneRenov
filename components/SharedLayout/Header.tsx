import React from 'react';
import {
  Badge,
  Header as DSFRHeader,
  HeaderBody,
  HeaderOperator,
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
        <HeaderOperator>
          <img
            src="/images/ademe-logo.svg"
            alt="ADEME"
            width={79}
            height={83}
          />
        </HeaderOperator>
        <Service
          title={
            <>
              La Bonne Rénov&lsquo;
              <Badge text="Bêta" colorFamily="green-emeraude" />
            </>
          }
          description="Des travaux de rénovations énergétiques plus performants"
          asLink={<Link href="/" title="Revenir à l'accueil" />}
        />
      </HeaderBody>
    </DSFRHeader>
  );
}

export default observer(Header);
