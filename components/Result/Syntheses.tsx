import React from 'react';
import { Icon } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './index.styles';
import Color from '../../types/enum/Color';

function Syntheses({ result }: { result: Result }) {
  return (
    <>
      {result.syntheses.positiveTitle && (
        <Slice color={Color.BLUE}>
          <WithIcon>
            <Icon name="ri-checkbox-circle-fill" size="3x" />
            <h3>{result.syntheses.positiveDescription}</h3>
          </WithIcon>
        </Slice>
      )}
      {result.syntheses.negativeTitle && (
        <Slice color={Color.RED}>
          <WithIcon>
            <Icon name="ri-error-warning-fill" size="3x" />
            <h3>{result.syntheses.negativeTitle}</h3>
          </WithIcon>
          {result.syntheses.negativeDescription && (
            <span>
              <b>{result.syntheses.negativeDescription}</b>
            </span>
          )}
        </Slice>
      )}
    </>
  );
}

export default Syntheses;
