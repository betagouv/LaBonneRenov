import Link from 'next/link';
import React from 'react';
import { Container, Description, Landing, Title } from './Home.styles';

function Home() {
  return (
    <Landing>
      <Container>
        <Title>La bonne rénov&lsquo;</Title>
        <Description>
          Vous êtes propriétaire d’une maison et souhaitez vérifier qu’une pompe
          à chaleur est adaptée à votre maison ?
        </Description>
        <Link className="fr-btn fr-mt-7w" href="/pac">
          Lancer le simulateur
        </Link>
      </Container>
    </Landing>
  );
}

export default Home;
