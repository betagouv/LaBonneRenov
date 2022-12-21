import React from 'react';
import { Result as ResultType } from '../types/result';

function Result({ result }: { result: ResultType }) {
  return <div>{JSON.stringify(result)}</div>;
}

export default Result;
