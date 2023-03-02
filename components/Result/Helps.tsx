import {
  Button,
  Card,
  CardHeader,
  CardDescription,
  CardImage,
  CardTitle,
} from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  getGlobalHelps,
  getPerStepHelps,
} from '../../frontend/services/simulator/fundings';
import { otherHelps } from '../../frontend/services/simulator/otherHelps';
import { steps } from '../../frontend/services/simulator/renovation';
import { useStore } from '../../frontend/stores';
import { IsolationResult } from '../../types/answer';
import MaPrimeRenovCategory from '../../types/enum/MaPrimeRenovCategory';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import { Help, OtherHelp } from '../../types/help';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { Cards } from './Helps.styles';

function Helps({ result, help }: { result: Result; help?: Help }) {
  const router = useRouter();
  const { unSkip } = useStore();
  const [toDo, setToDo] = useState<(keyof IsolationResult)[]>([]);
  const [eligibileOtherHelps, setEligibileOtherHelps] = useState<OtherHelp[]>(
    []
  );

  useEffect(() => {
    if (result.rennovation) {
      setToDo(
        result.rennovation.firstStep.steps.concat(
          result.rennovation.secondStep.steps
        )
      );
    } else {
      setToDo([]);
    }
  }, [result]);

  useEffect(() => {
    if (help) {
      const now = new Date();
      setEligibileOtherHelps(
        otherHelps.filter((x) =>
          x.eligibility(help.status, now.getFullYear() - help.constructionYear)
        )
      );
    }
  }, [help]);

  return help ? (
    <Slice>
      <h3>Les aides mobilisables pour votre projet</h3>
      {help.constructionYear > 2008 ? (
        <p>
          Votre maison est trop récenter pour avoir le droit aux aides de
          MaPrimeRenov&lsquo;
        </p>
      ) : (
        <>
          <h4>Récapitulatif</h4>
          <h5>Votre situation</h5>
          <ul>
            <li>{help.status}</li>
            <li>{help.residence}</li>
            <li>Revenu : {help.income}</li>
            <li>Nombre personne dans le foyer : {help.nbPersonnes}</li>
          </ul>
          <h5>Votre logement</h5>
          <ul>
            <li>Maison individuelle</li>
            <li>Date de contruction : {help.constructionYear}</li>
            <li>{help.inIdf ? 'En Île-de-France' : 'Hors Île-de-France'}</li>
          </ul>
          <h5>Les travaux identifiés dans votre simmulation</h5>
          <ul>
            {toDo.map((step) => (
              <li key={step}>{steps[step]}</li>
            ))}
            <li>Installer une PAC</li>
          </ul>
          <h4>Vos aides Ma Prime Rénov’</h4>
          {(help.color === MaPrimeRenovCategory.BLUE ||
            help.color === MaPrimeRenovCategory.YELLOW) && (
            <>
              <h5>Ma Prime Rénov’ Sérénité</h5>
              Ma Prime Rénov’ Sérénité s’adresse aux ménages aux revenu modeste
              qui s’engagent dans un parcours de travaux permettant un gain
              minimum de 35% de performance énergétique, et être classé au
              minimum en classe DPE E après travaux.
              <br />
              Les aides mobilisable dans votre situation :
              <ul>
                {getGlobalHelps(help.color).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          )}
          {(help.color === MaPrimeRenovCategory.VIOLET ||
            help.color === MaPrimeRenovCategory.PINK) && (
            <>
              <h5>Ma Prime Rénov’ Rénovation Globale</h5>
              Ma Prime Rénov’ Globale s’adresse aux ménages qui s’engagent dans
              un parcours de travaux permettant un gain minimum de 55% de
              performance énergétique après travaux. Il est nécéssaire de
              réaliser un audit énergétique avant de lancer les travaux.
              <br />
              Les aides mobilisable dans votre situation :
              <ul>
                {getGlobalHelps(help.color).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          )}
          <h5>Ma Prime Rénov’ par gestes</h5>
          Si le parcours de travaux que vous envisagez ne vous permet pas
          d’atteindre les performances minimum fixées par les critères de Ma
          Prime Rénov’ Sérénité ou Rénovation Globale, il est possible d’obtenir
          un financement par geste.
          <br />
          Les aides mobilisable dans votre situation :
          <ul>
            {getPerStepHelps(help.color, toDo).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h4>
            Vous êtes également éligible à ces {eligibileOtherHelps.length}{' '}
            aides
          </h4>
          MaPrimeRénov peut se cumuler avec d’autres dispositifs nationaux ou
          locaux.
          <br />
          Dans le cadre de la rénovation de votre logement liée à la perte
          d’autonomie, certains travaux peuvent bénéficier de taux réduits de
          TVA.
          <Cards>
            {eligibileOtherHelps.map((x) => (
              <Card key={x.title} href={x.link} isHorizontal>
                <CardHeader>
                  <CardImage src={x.logo} />
                </CardHeader>
                <CardTitle>{x.title}</CardTitle>
                <CardDescription>{x.description}</CardDescription>
              </Card>
            ))}
          </Cards>
          <h4>Comment obtenir les aides ?</h4>
          Attention, il est nécessaire d’obtenir l’accord du financeur (Anah,
          obligataire CEE, collectivités locales, caisses de retraite) avant de
          signer votre devis et de commencer vos travaux.
          <br />
          En savoir plus sur les aides :
          <br />
          Téléchargez{' '}
          <a
            href="https://france-renov.gouv.fr/sites/default/files/2023-02/Guide-des-aides-financieres-2023-WEBA.pdf"
            target="_blank"
            rel="noreferrer"
          >
            le guide des aides financières 2023
          </a>
        </>
      )}
    </Slice>
  ) : (
    <Slice>
      <h3>Les aides mobilisables pour votre projet</h3>
      <p>
        Veuillez répondre aux questions sur vos revenus pour voir si vous êtes
        elligible aux aides MaPrimeRenov&lsquo;
      </p>
      <Button
        secondary
        onClick={() => {
          unSkip(QuestionGroupId.INCOME, router);
          router.push(`/pac/${QuestionId.NB_PERSONNES}`);
        }}
      >
        Remplir mes revenus
      </Button>
    </Slice>
  );
}

Helps.defaultProps = {
  help: null,
};

export default observer(Helps);
