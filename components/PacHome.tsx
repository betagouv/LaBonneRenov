import { Accordion, AccordionItem, Button } from '@dataesr/react-dsfr';
import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../frontend/stores';
import Color from '../types/enum/Color';
import {
  FaqAnswer,
  HeaderContent,
  HeaderDescription,
  PacImage,
} from './PacHome.styles';
import PacHeader from './SharedLayout/PacHeader';
import Slice from './Slice';

function Home() {
  const router = useRouter();
  const { reset } = useStore();

  return (
    <>
      <Slice color={Color.GRAY}>
        <PacHeader resume />
        <HeaderContent>
          <PacImage
            width={315}
            height={256}
            src="/images/home-pac.svg"
            alt="Installer une PAC"
          />
          <div>
            <h1>
              Est-ce qu’une pompe à chaleur est bien adaptée à ma maison ?
            </h1>
            <HeaderDescription>
              En quelques questions, vérifiez la cohérence et l’impact sur votre
              maison de l’installation d’une pompe à chaleur air-eau.
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
          </div>
        </HeaderContent>
      </Slice>
      <Slice>
        <h2>Comment fonctionne une pompe à chaleur ?</h2>
        <Accordion keepOpen>
          <AccordionItem
            title="Les grands principes de fonctionnement"
            initExpand
          >
            <FaqAnswer>
              <PacImage
                width={347}
                height={253}
                src="/images/pac-explanation.svg"
                alt="Fonctionnement d'une PAC"
              />
              <div>
                La pompe à chaleur (parfois appelée PAC) est un dispositif qui
                permet de{' '}
                <b>
                  transférer de l&lsquo;énergie thermique d&lsquo;un milieu à
                  basse température vers un milieu à haute température.
                </b>
                Son principe est de capter la chaleur extérieure de l’air, du
                sol ou de l’eau et de transférer cette énergie pour obtenir une
                température assez élevée pour chauffer un logement. Toutes les
                pompes à chaleur nécessitent de l&lsquo;électricité pour
                fonctionner.
                <br />
                <br />
                Les calories récupérées dans l’air par l’unité extérieure
                servent à évaporer le fluide frigorigène. Le gaz obtenu est
                ensuite comprimé dans un compresseur afin d’augmenter sa
                température. Il rejoint un condenseur dans lequel il devient
                liquide en libérant sa chaleur, qui est récupérée par l’eau du
                circuit de chauffage central.
              </div>
            </FaqAnswer>
          </AccordionItem>
          <AccordionItem title="Les différents types de pompe à chaleur">
            TODO
          </AccordionItem>
          <AccordionItem title="Les avantages de la pompe à chaleur">
            TODO
          </AccordionItem>
        </Accordion>
      </Slice>
    </>
  );
}

export default Home;
