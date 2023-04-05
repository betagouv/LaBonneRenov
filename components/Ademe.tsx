import { Link } from '@dataesr/react-dsfr';
import React from 'react';
import { HeaderContent } from './PacHome.styles';

const Ademe = () => (
  <>
    <h2>À propos</h2>
    <HeaderContent>
      <div>
        <img src="/images/ademe-logo.svg" alt="ADEME" width={150} />
      </div>
      <div>
        La Bonne Rénov’ est un <b>service public gratuit</b> proposé par l’
        <b>Agence pour la Transition Écologique (ADEME)</b>. Notre mission :
        aider les propriétaires de maisons individuelles à construire un projet
        de rénovation énergétique performante.
        <br />
        <br />
        <Link href="https://www.ademe.fr/" target="_blank" isSimple>
          Le site de l’ADEME
        </Link>
      </div>
    </HeaderContent>
  </>
);

export default Ademe;
