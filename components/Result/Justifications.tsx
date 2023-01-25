import React from 'react';
import Image from 'next/image';
import { Result } from '../../types/result';
import Slice from '../Slice';
import { WithIcon } from './index.styles';
import Color from '../../types/enum/Color';
import { Container, Justification } from './Justifications.styles';

function Justifications({ result }: { result: Result }) {
  return (
    <Slice color={Color.GRAY}>
      <h2>Pourquoi ce résultat ?</h2>
      <Container>
        {result.justifications.positives.length > 0 && (
          <Justification>
            <WithIcon>
              <Image src="/images/positive.svg" alt="" width={35} height={35} />
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
              <Image src="/images/negative.svg" alt="" width={35} height={35} />
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
