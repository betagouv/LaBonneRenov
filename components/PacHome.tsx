import { Button } from '@dataesr/react-dsfr';
import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../frontend/stores';
import Color from '../types/enum/Color';
import Ademe from './Ademe';
import {
  DesktopButton,
  DesktopTitle,
  GlobalStyle,
  HeaderContent,
  HeaderDescriptionWithImage,
  Hint,
  MobileButton,
  MobileTitle,
  DesktopImage,
  MobileImage,
  HeaderExplanation,
  Explanations,
} from './PacHome.styles';
import Slice from './Slice';

function Home() {
  const router = useRouter();
  const { reset } = useStore();

  return (
    <>
      <GlobalStyle />
      <MobileButton>
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
        <Hint>
          Durée estimée : 2 minutes
          <br />
          Aucune information personnelle requise
        </Hint>
      </MobileButton>
      <Slice color={Color.GRAY} padding={128} smallPadding={32}>
        <HeaderContent>
          <DesktopImage
            width={315}
            height={256}
            src="/images/home-pac.svg"
            alt="Installer une PAC"
          />
          <div>
            <DesktopTitle>
              Est-ce qu’une pompe à chaleur air/eau est bien adaptée à ma
              maison ?
            </DesktopTitle>
            <MobileTitle>
              Est-ce qu’une pompe à chaleur air/eau est bien adaptée à ma
              maison ?
            </MobileTitle>
            <HeaderDescriptionWithImage>
              <MobileImage
                width={51}
                height={98}
                src="/images/home-pac-mobile.svg"
                alt="Installer une PAC"
              />
              <b>
                Posez-vous les bonnes questions avant de vous lancer dans vos
                travaux de rénovation énergétique.
              </b>
            </HeaderDescriptionWithImage>
            <DesktopButton>
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
              <Hint>
                Durée estimée : 2 minutes /{' '}
                <b>Aucune information personnelle requise</b>
              </Hint>
            </DesktopButton>
          </div>
        </HeaderContent>
        <HeaderExplanation>
          <h5>À quoi sert le simulateur</h5>
          <Explanations>
            <div>
              <img src="/images/home-explanation-1.svg" alt="Sécurité" />
              <span>Des conseils personnalisés sur votre maison</span>
            </div>
            <div>
              <img src="/images/home-explanation-2.svg" alt="Argent" />
              <span>
                Vos leviers pour maximiser vos gains énergétiques et financiers
              </span>
            </div>
            <div>
              <img src="/images/home-explanation-3.svg" alt="Contact" />
              <span>Les clés pour éviter les fraudes</span>
            </div>
          </Explanations>
        </HeaderExplanation>
      </Slice>
      <Slice>
        <Ademe />
      </Slice>
    </>
  );
}

export default Home;
