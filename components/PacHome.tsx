import { Button, Link } from '@dataesr/react-dsfr';
import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../frontend/stores';
import Color from '../types/enum/Color';
import {
  HeaderContent,
  HeaderDescription,
  Hint,
  PacImage,
} from './PacHome.styles';
import Slice from './Slice';

function Home() {
  const router = useRouter();
  const { reset } = useStore();

  return (
    <>
      <Slice color={Color.GRAY} padding={128} smallPadding={32}>
        <HeaderContent>
          <PacImage
            width={315}
            height={256}
            src="/images/home-pac.svg"
            alt="Installer une PAC"
          />
          <div>
            <h1>
              Est-ce qu’une pompe à chaleur air/eau est bien adaptée à ma
              maison ?
            </h1>
            <HeaderDescription>
              Posez-vous les bonnes questions avant de vous lancer dans vos
              travaux de rénovation énergétique.
            </HeaderDescription>
            <Button
              iconPosition="right"
              icon="ri-arrow-right-line"
              onClick={() => {
                reset(router);
                router.push('/pac/simulateur');
              }}
            >
              Commencer la simulation
            </Button>
            <Hint>Durée estimée : 2 minutes</Hint>
          </div>
        </HeaderContent>
      </Slice>
      <Slice>
        <h2>À propos</h2>
        <HeaderContent>
          <div>
            <img src="/images/ademe-logo.svg" alt="ADEME" width={150} />
          </div>
          <div>
            La Bonne Rénov’ est un <b>service public gratuit</b> proposé par l’
            <b>Agence pour la Transition Écologique (ADEME)</b>. Notre mission :
            aider les propriétaires de maisons individuelles à construire un
            projet de rénovation énergétique performante.
            <br />
            <br />
            <Link href="https://www.ademe.fr/" target="_blank" isSimple>
              Le site de l’ADEME
            </Link>
          </div>
        </HeaderContent>
      </Slice>
    </>
  );
}

export default Home;
