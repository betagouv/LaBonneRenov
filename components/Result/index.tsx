import React from 'react';
import { Result as ResultType } from '../../types/result';
import Justifications from './Justifications';
import Synthese from './Syntheses';

function Result({ result }: { result: ResultType }) {
  return (
    <>
      <Synthese result={result} />
      <Justifications result={result} />
      {JSON.stringify(result)}
    </>
  );
}

export default Result;
