import React from 'react';
import { RennovationResult } from '../../types/answer';
import { Result } from '../../types/result';
import { Savings } from '../../types/savings';
import Slice from '../Slice';
import { Separator } from './index.styles';

const transformGain = (number: number): string =>
  Math.round(number * 100).toString();

const computeGain = (
  rennovation: RennovationResult,
  type: keyof Savings
): string => {
  const gain =
    rennovation.firstStep.savings[type] +
    (1 - rennovation.firstStep.savings[type]) *
      rennovation.secondStep.savings[type];

  const min = gain < 0.15 ? gain - 0.03 : gain - 0.05;
  const max = gain < 0.15 ? gain + 0.03 : gain + 0.05;
  return `${transformGain(min)} % - ${transformGain(max)} %`;
};

function Gain({ result }: { result: Result }) {
  if (!result.rennovation) {
    return null;
  }

  return (
    <Slice>
      <h2>Quel gain en perspective ?</h2>
      <ul>
        <li>Gain EF: {computeGain(result.rennovation, 'ef')}</li>
        <li>Gain EP: {computeGain(result.rennovation, 'ep')}</li>
        <li>Gain GES: {computeGain(result.rennovation, 'ges')}</li>
        <li>Gain Facture: {computeGain(result.rennovation, 'facture')}</li>
      </ul>
      <h3>Parcours de travaux proposé</h3>
      <Separator />
      <ol>
        <li>
          <ul>
            {result.pacAsFirstStep && <li>pac</li>}
            {result.rennovation.firstStep.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </li>
        {(result.rennovation.secondStep.steps.length > 0 ||
          !result.pacAsFirstStep) && (
          <>
            <Separator />
            <li>
              <ul>
                {!result.pacAsFirstStep && <li>pac</li>}
                {result.rennovation.secondStep.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </li>
          </>
        )}
      </ol>
    </Slice>
  );
}

export default Gain;
