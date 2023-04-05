import { Button } from '@dataesr/react-dsfr';
import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../frontend/stores';
import Color from '../types/enum/Color';
import Ademe from './Ademe';
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
              <b>
                Posez-vous les bonnes questions avant de vous lancer dans vos
                travaux de rénovation énergétique.
              </b>
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
        <Ademe />
      </Slice>
    </>
  );
}

export default Home;
