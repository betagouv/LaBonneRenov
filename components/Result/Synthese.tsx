import React from 'react';
import { Icon } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './Synthese.styles';
import Color from '../../types/enum/Color';

function Synthese({ result }: { result: Result }) {
  return (
    <>
      {result.compatibility !== 'nok' && (
        <Slice color={Color.BLUE}>
          <h1>Bonne nouvelle</h1>
          <WithIcon>
            <Icon name="ri-checkbox-circle-fill" size="3x" />
            <h4>
              {result.compatibility === 'sok'
                ? 'L’installation d’une pompe à chaleur semble être une solution pertinente pour votre maison.'
                : result.synthese}
            </h4>
          </WithIcon>
        </Slice>
      )}
      {result.compatibility === 'sok' && (
        <Slice color={Color.RED}>
          <WithIcon>
            <Icon name="ri-error-warning-fill" size="3x" />
            <h2>
              Cependant, certains travaux préliminaires restent fortement
              recommandés.
            </h2>
          </WithIcon>
          <span>
            <b>{result.synthese}</b>
          </span>
        </Slice>
      )}
    </>
  );
}

export default Synthese;
