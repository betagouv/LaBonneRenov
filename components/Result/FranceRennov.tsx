import { Button, Link } from '@dataesr/react-dsfr';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Color from '../../types/enum/Color';
import Slice from '../Slice';
import { Contact, Container, Info, Logo } from './FranceRennov.styles';
import { useStore } from '../../frontend/stores';
import QuestionId from '../../types/enum/QuestionId';
import agent from '../../frontend/services/agent';
import { Separator } from './index.styles';
import { FranceRennovResult } from '../../types/franceRennovResult';

function FranceRennov() {
  const { currentAnswers } = useStore();
  const infoRef = useRef<HTMLDivElement>(null);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [info, setInfo] = useState<FranceRennovResult>();

  useEffect(() => {
    const cp = currentAnswers.find(
      (answer) => answer.id === QuestionId.CODE_POSTAL
    );
    if (cp && cp.value) {
      agent.Addresse.getFranceRennov(cp.value as string)
        .then(setInfo)
        .catch(console.log);
    }
  }, [currentAnswers, setInfo]);

  return (
    <>
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
            France Renov peut vous aider à obtenir des conseils professionnels
            et des informations sur les programmes de rénovation disponibles qui
            peuvent vous aider à réduire vos coûts et à maximiser les avantages
            de la rénovation de votre maison.
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
            <Button
              className="fr-mt-3w"
              disabled={!info}
              onClick={() => {
                setDisplayInfo(true);
                infoRef.current?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Contacter un conseiller France Rénov proche de chez vous
            </Button>
          </div>
        </Container>
      </Slice>
      <div ref={infoRef}>
        {displayInfo && info && (
          <Slice color={Color.GRAY}>
            <h3>Le conseiller France Rénov’ le plus proche de chez vous</h3>
            <h4>{info.raison_sociale}</h4>
            <span>
              {`${info.adresse_postale.adresse1} ${info.adresse_postale.code_postal} ${info.adresse_postale.ville} `}
              <Link
                isSimple
                target="_blank"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
                  `${info.raison_sociale} ${info.adresse_postale.adresse1} ${info.adresse_postale.code_postal} ${info.adresse_postale.ville}`
                )}`}
              >
                Localiser
              </Link>
            </span>
            <Separator className="fr-mt-3w" />
            <Info>
              <div>
                <h4>Coordonées</h4>
                {info.tel && (
                  <Contact>
                    <Link isSimple href={`tel:${info.tel.replace(/ /g, '')}`}>
                      {info.tel}
                    </Link>
                  </Contact>
                )}
                {info.email && (
                  <Contact>
                    <Link href={`mailto:${info.email}`} isSimple>
                      {info.email}
                    </Link>
                  </Contact>
                )}
                {info.web && (
                  <Contact>
                    <Link target="_blank" href={info.web} isSimple>
                      {info.web}
                    </Link>
                  </Contact>
                )}
              </div>
              {info.horaire && info.horaire.length > 0 && (
                <div>
                  <h4>Horaires d&lsquo;accueil</h4>
                  <ul>
                    {info.horaire.map((horaire) => (
                      <li key={horaire}>{horaire}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Info>
          </Slice>
        )}
      </div>
    </>
  );
}

export default FranceRennov;
