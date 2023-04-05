import { Button } from '@dataesr/react-dsfr';
import { Crisp } from 'crisp-sdk-web';
import React, { useEffect, useState } from 'react';
import Color from '../types/enum/Color';
import Ademe from './Ademe';
import {
  HeaderContent,
  HeaderDescription,
  DesktopImage,
} from './PacHome.styles';
import Slice from './Slice';

const Conseiller = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Crisp.chat.onChatOpened(() => setIsOpen(true));
    Crisp.chat.onChatClose(() => setIsOpen(false));
    Crisp.session.onLoaded(() => {
      setIsOpen(Crisp.chat.isChatOpened());
    });
  }, []);

  return (
    <>
      <Slice color={Color.GRAY} padding={128} smallPadding={32}>
        <HeaderContent>
          <DesktopImage
            width={315}
            height={256}
            src="/images/conseiller.svg"
            alt="Parler à un conseiller"
          />
          <div>
            <h1>
              Vous avez des questions sur votre projet de rénovation
              énergétique ?
            </h1>
            <HeaderDescription>
              Se lancer dans la rénovation énergétique de sa maison n’est pas
              toujours simple.
              <br />
              <b>
                Nos experts de l’ADEME répondent en direct et vous aident à
                initier votre projet.
              </b>
            </HeaderDescription>
            <Button
              iconPosition="left"
              icon="ri-question-answer-fill"
              disabled={isOpen}
              onClick={() => {
                Crisp.chat.open();
              }}
            >
              Poser vos questions
            </Button>
          </div>
        </HeaderContent>
      </Slice>
      <Slice>
        <Ademe />
      </Slice>
    </>
  );
};

export default Conseiller;
