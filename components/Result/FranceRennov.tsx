import { Link } from '@dataesr/react-dsfr';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slice from '../Slice';
import { Logo } from './FranceRennov.styles';
import { useStore } from '../../frontend/stores';
import QuestionId from '../../types/enum/QuestionId';
import agent from '../../frontend/services/agent';
import { FranceRennovResult } from '../../types/franceRennovResult';
import { HeaderContent } from '../PacHome.styles';
import FranceRennovAccordion, {
  sendFranceRennovEvent,
} from './FranceRennovAccordion';

function FranceRennov({ openFranceRennov }: { openFranceRennov: boolean }) {
  const { currentAnswers } = useStore();
  const [info, setInfo] = useState<FranceRennovResult>();

  useEffect(() => {
    if (openFranceRennov) {
      sendFranceRennovEvent(currentAnswers);
    }
  }, [openFranceRennov, currentAnswers]);

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
    <Slice>
      <h3>Être accompagné par un conseiller France Rénov’</h3>
      <HeaderContent>
        <Logo>
          <Image
            src="/images/france-rennov.png"
            alt="France rénnov"
            width={250}
            height={122.5}
          />
        </Logo>
        <div>
          Les conseillers du service public France Rénov&lsquo; vous
          accompagnent gratuitement sur l’ensemble du territoire.
          <br />
          <br />
          <Link target="_blank" href="https://france-renov.gouv.fr/" isSimple>
            Découvrir le réseau France Rénov
          </Link>
        </div>
      </HeaderContent>
      {openFranceRennov ? (
        <FranceRennovAccordion
          key="opened"
          opened
          info={info}
          currentAnswers={currentAnswers}
        />
      ) : (
        <FranceRennovAccordion
          key="closed"
          info={info}
          currentAnswers={currentAnswers}
        />
      )}
    </Slice>
  );
}

export default FranceRennov;
