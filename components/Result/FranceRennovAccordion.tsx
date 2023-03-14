import { Accordion, AccordionItem, Link } from '@dataesr/react-dsfr';
import React from 'react';
import matomoEvent, {
  FRANCE_RENNOV,
} from '../../frontend/services/matomoEvent';
import { Answer } from '../../types/answer';
import QuestionId from '../../types/enum/QuestionId';
import { FranceRennovResult } from '../../types/franceRennovResult';
import { Contact, Info } from './FranceRennov.styles';
import { Separator } from './index.styles';

let sent = false;
export const sendFranceRennovEvent = (currentAnswers: Answer[]) => {
  if (!sent) {
    sent = true;
    const cp = currentAnswers.find(
      (answer) => answer.id === QuestionId.CODE_POSTAL
    );
    if (cp && cp.value) {
      matomoEvent([FRANCE_RENNOV, cp.value as string]);
    }
  }
};

function FranceRennovAccordion({
  opened,
  info,
  currentAnswers,
}: {
  opened?: boolean;
  info?: FranceRennovResult;
  currentAnswers: Answer[];
}) {
  return info ? (
    <Accordion className="fr-mt-4w">
      <AccordionItem
        initExpand={opened}
        titleAs="h4"
        title="Afficher les coordonnées de votre conseiller France Rénov’"
        onClick={() => {
          if (!opened) {
            sendFranceRennovEvent(currentAnswers);
          }
        }}
      >
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
      </AccordionItem>
    </Accordion>
  ) : null;
}
FranceRennovAccordion.defaultProps = {
  info: null,
  opened: false,
};

export default FranceRennovAccordion;
