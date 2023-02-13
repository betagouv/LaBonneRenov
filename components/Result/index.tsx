import React from 'react';
import { Result as ResultType } from '../../types/result';
import PacHeader from '../SharedLayout/PacHeader';
import Slice from '../Slice';
import FranceRennov from './FranceRennov';
import Gain from './Gain';
import Justifications from './Justifications';
import Synthese from './Syntheses';

function Result({ result }: { result: ResultType }) {
  return (
    <>
      <Slice noPadding>
        <PacHeader />
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
