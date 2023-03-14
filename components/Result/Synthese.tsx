import React from 'react';
import { Button, Icon } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './index.styles';
import Color from '../../types/enum/Color';
import { CenteredButton } from './Synthese.styles';

const values = {
  ok: "L'installation d'une pompe à chaleur dans votre logement est pertinente.",
  sok: "L'installation d'une pompe à chaleur dans votre logement ne sera pertinente que si vous réalisez d'autres travaux au préalable.",
  nok: "L'installation d'une pompe à chaleur n'est pas pertinente pour votre logement, qui nécessite d'autres travaux de rénovation prioritaires.",
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
        <Icon name="ri-information-line" size="3x" />
        <h3>{values[result.compatibility]}</h3>
      </WithIcon>
      <CenteredButton>
        <Button
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
