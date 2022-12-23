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
          <h1>{result.syntheses.positiveTitle}</h1>
          <WithIcon>
            <Icon name="ri-checkbox-circle-fill" size="3x" />
            <h4>{result.syntheses.positiveDescription}</h4>
          </WithIcon>
        </Slice>
      )}
      {result.syntheses.negativeTitle && (
        <Slice color={Color.RED}>
          <WithIcon>
            <Icon name="ri-error-warning-fill" size="3x" />
            <h2>{result.syntheses.negativeTitle}</h2>
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
