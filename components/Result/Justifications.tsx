import React from 'react';
import { Icon } from '@dataesr/react-dsfr';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './index.styles';
import Color from '../../types/enum/Color';
import { Container, Justification } from './Justifications.styles';

function Justifications({ result }: { result: Result }) {
  return (
    <Slice color={Color.GRAY}>
      <h1>Pourquoi ce résultat ?</h1>
      <Container>
        {result.justifications.positives.length > 0 && (
          <Justification>
            <WithIcon>
              <Icon name="ri-checkbox-circle-line" size="2x" />
              <div>
                <h3>Points positifs</h3>
                <ul>
                  {result.justifications.positives.map((justification) => (
                    <li key={justification}>{justification}</li>
                  ))}
                </ul>
              </div>
            </WithIcon>
          </Justification>
        )}
        {result.justifications.negatives.length > 0 && (
          <Justification>
            <WithIcon>
              <Icon name="ri-close-circle-line" size="2x" />
              <div>
                <h3>Points négatifs</h3>
                <ul>
                  {result.justifications.negatives.map((justification) => (
                    <li key={justification}>{justification}</li>
                  ))}
                </ul>
              </div>
            </WithIcon>
          </Justification>
        )}
      </Container>
    </Slice>
  );
}

export default Justifications;
