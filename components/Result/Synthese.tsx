import React from 'react';
import { Button, Icon } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './index.styles';
import Color from '../../types/enum/Color';
import { CenteredButton } from './Synthese.styles';

const values = {
  ok: "L'installation d'une pompe à chaleur air/eau semble adapté à votre logement.",
  sok: 'Avant d’installer une pompe à chaleur air/eau, votre logement nécessite des travaux complémentaires qui maximiseront son efficacité.',
  nok: "En l'état, l'installation d'une pompe à chaleur air/eau dans votre logement n'est pas recommandé. D'autres travaux prioritaires sont à prévoir en amont.",
};

function Synthese({
  result,
  setOpenFranceRennov,
  franceRennovRef,
}: {
  result: Result;
  setOpenFranceRennov: React.Dispatch<React.SetStateAction<boolean>>;
  franceRennovRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <Slice color={Color.BLUE}>
      <WithIcon>
        <Icon name="ri-error-warning-line" size="3x" />
        <h3>{values[result.compatibility]}</h3>
      </WithIcon>
      <CenteredButton>
        <Button
          size="lg"
          onClick={() => {
            setOpenFranceRennov(true);
            if (franceRennovRef) {
              franceRennovRef.current?.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
        >
          Être accompagné par un conseiller France Rénov’
        </Button>
      </CenteredButton>
    </Slice>
  );
}

export default Synthese;
