import { Button } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../frontend/stores';
import MaPrimeRenovCategory from '../../types/enum/MaPrimeRenovCategory';
import QuestionGroupId from '../../types/enum/QuestionGroupId';
import QuestionId from '../../types/enum/QuestionId';
import Slice from '../Slice';

const getHelp = (color: MaPrimeRenovCategory) => {
  switch (color) {
    case MaPrimeRenovCategory.BLUE:
      return '50% du montant des travaux dans la limite de 17 500€';
    case MaPrimeRenovCategory.YELLOW:
      return '35% du montant des travaux dans la limite de 12 250€';
    case MaPrimeRenovCategory.VIOLET:
      return '20% du montant des travaux dans la limite de 10 000€';
    case MaPrimeRenovCategory.PINK:
    default:
      return '10% du montant des travaux dans la limite de 5 500€';
  }
};
function Helps() {
  const router = useRouter();
  const { loading, currentAnswers, unSkip } = useStore();
  const [color, setColor] = useState<MaPrimeRenovCategory>();
  const [tooRecent, setTooRecent] = useState(false);

  useEffect(() => {
    if (!loading && currentAnswers) {
      const result = currentAnswers.find(
        (answer) => answer.id === QuestionId.INCOME
      );
      const oldHouseAnswer = currentAnswers.find(
        (answer) => answer.id === QuestionId.CONSTRUCTION
      );

      setTooRecent(!oldHouseAnswer || oldHouseAnswer.value === 'very recent');
      setColor(result ? (result.value as MaPrimeRenovCategory) : undefined);
    }
  }, [loading, currentAnswers]);

  return (
    <Slice>
      <h3>Vos aides MaPrimeRenov&lsquo;</h3>
      {tooRecent && (
        <p>
          Votre maison est trop récenter pour avoir le droit aux aides de
          MaPrimeRenov&lsquo;
        </p>
      )}
      {!tooRecent && !color && (
        <>
          <p>
            Veuillez répondre aux questions sur vos revenus pour voir si vous
            êtes elligible aux aides MaPrimeRenov&lsquo;
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
        </>
      )}
      {!tooRecent && color && (
        <p>
          Selon vos déclaration, vous avez le droit aux aides
          MaPrimeRenov&lsquo; : <b>{getHelp(color)}</b>
        </p>
      )}
    </Slice>
  );
}

export default observer(Helps);
