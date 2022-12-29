import { Button, Link } from '@dataesr/react-dsfr';
import React from 'react';
import Image from 'next/image';
import Color from '../../types/enum/Color';
import Slice from '../Slice';
import { Container, Logo } from './FranceRennov.styles';

function FranceRennov() {
  return (
    <Slice color={Color.BLUE}>
      <h3>Le réseau de conseillers France Rénov’</h3>
      <Container>
        <Logo>
          <Image
            src="/images/france-rennov.png"
            alt="France rénnov"
            width={250}
            height={122.5}
          />
        </Logo>
        <div>
          France Renov peut vous aider à obtenir des conseils professionnels et
          des informations sur les programmes de rénovation disponibles qui
          peuvent vous aider à réduire vos coûts et à maximiser les avantages de
          la rénovation de votre maison.
          <ul>
            <li>Évaluer le montant des aides</li>
            <li>Évaluer les économies générées par vos factures</li>
            <li>Proposer un accompagnement personnalisé</li>
            <li>Trouver des installateurs certifiés</li>
          </ul>
          <Link
            target="_blank"
            href="https://france-renov.gouv.fr/"
            className="fr-mt-3w"
          >
            Découvrir le réseau France Rénov
          </Link>
          <Button className="fr-mt-3w">
            Contacter un conseiller France Rénov proche de chez vous
          </Button>
        </div>
      </Container>
    </Slice>
  );
}

export default FranceRennov;
