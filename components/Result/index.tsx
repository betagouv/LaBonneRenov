import { Breadcrumb, BreadcrumbItem } from '@dataesr/react-dsfr';
import Link from 'next/link';
import React from 'react';
import { Result as ResultType } from '../../types/result';
import Slice from '../Slice';
import FranceRennov from './FranceRennov';
import Gain from './Gain';
import Justifications from './Justifications';
import Synthese from './Syntheses';

function Result({ result }: { result: ResultType }) {
  return (
    <>
      <Slice noPadding>
        <Breadcrumb>
          <BreadcrumbItem asLink={<Link href="/" />}>Accueil</BreadcrumbItem>
          <BreadcrumbItem>
            Vérifier qu’une pompe à chaleur est adaptée à votre maison
          </BreadcrumbItem>
        </Breadcrumb>
        <h1>Résultats de votre simulation</h1>
      </Slice>

      <Synthese result={result} />
      <Justifications result={result} />
      <Gain result={result} />
      <FranceRennov />
    </>
  );
}

export default Result;
