import React from 'react';
import { Result as ResultType } from '../../types/result';
import Gain from './Gain';
import Justifications from './Justifications';
import Synthese from './Syntheses';

function Result({ result }: { result: ResultType }) {
  return (
    <>
      <Synthese result={result} />
      <Justifications result={result} />
      <Gain result={result} />
    </>
  );
}

export default Result;
