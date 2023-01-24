import { Icon } from '@dataesr/react-dsfr';
import React from 'react';
import { RennovationResult, IsolationResult } from '../../types/answer';
import { Result } from '../../types/result';
import { Savings } from '../../types/savings';
import Slice from '../Slice';
import { GainDescription, Gains, GainTitle } from './Gain.styles';
import { Separator } from './index.styles';

const steps: Record<keyof IsolationResult, string> = {
  vmc: 'Installer un système de ventilation mécanique contrôlée (VMC)',
  mur: 'Isoler les murs',
  menuiserie: 'Remplacer vos fenêtres',
  plancherHaut: 'Isoler les combles',
  plancherBas: 'Isoler le plancher au dessus de la cave ou du vide sanitaire',
};

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
  return `${transformGain(min)} % à ${transformGain(max)} %`;
};

function Gain({ result }: { result: Result }) {
  if (!result.rennovation) {
    return null;
  }

  return (
    <Slice>
      <h2>Quel gain en perspective ?</h2>
      <Gains>
        <li>
          <GainTitle>
            Réduction de {computeGain(result.rennovation, 'ep')} de votre
            consommation en énergie primaire
          </GainTitle>
          <GainDescription>
            <Icon size="lg" name="ri-information-line" />
            Énergie initiale d&lsquo;un produit non transformé, sa valeur est
            prise en compte pour le calcul du diagnostic de performance
            énergétique - DPE
          </GainDescription>
        </li>
        <li>
          <GainTitle>
            Réduction de {computeGain(result.rennovation, 'ges')} des émissions
            de gaz à effet de serre de votre maison
          </GainTitle>
          <GainDescription>
            <Icon size="lg" name="ri-information-line" />
            Gaz présent dans l&lsquo;atmosphère qui retient une partie de la
            chaleur reçue par le solaire dans l&lsquo;atmosphère et agissent sur
            la température
          </GainDescription>
        </li>
        <li>
          <GainTitle>
            Réduction de {computeGain(result.rennovation, 'facture')} de vos
            factures d&lsquo;énergie
          </GainTitle>
          <GainDescription>
            <Icon size="lg" name="ri-information-line" />
            Estimation hors coût d&lsquo;abonnement
          </GainDescription>
        </li>
      </Gains>
      <h3>Parcours de travaux proposé</h3>
      <Separator />
      <h4>1er lot de travaux</h4>
      <ul>
        {result.pacAsFirstStep && <li>Installer une pompe à chaleur</li>}
        {result.rennovation.firstStep.steps.map((step) => (
          <li key={step}>{steps[step]}</li>
        ))}
      </ul>
      {(result.rennovation.secondStep.steps.length > 0 ||
        !result.pacAsFirstStep) && (
        <>
          <Separator />
          <h4>2e lot de travaux</h4>
          <ul>
            {!result.pacAsFirstStep && <li>Installer une pompe à chaleur</li>}
            {result.rennovation.secondStep.steps.map((step) => (
              <li key={step}>{steps[step]}</li>
            ))}
          </ul>
        </>
      )}
    </Slice>
  );
}

export default Gain;
