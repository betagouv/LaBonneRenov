import React from 'react';
import { Result as ResultType } from '../../types/result';
import Synthese from './Synthese';

function Result({ result }: { result: ResultType }) {
  return (
    <>
      <Synthese result={result} />
      {JSON.stringify(result)}
    </>
  );
}

export default Result;
