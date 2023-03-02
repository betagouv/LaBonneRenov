import React from 'react';
import { Help } from '../../types/help';
import { Result as ResultType } from '../../types/result';
import PacHeader from '../SharedLayout/PacHeader';
import Slice from '../Slice';
import FranceRennov from './FranceRennov';
import Gain from './Gain';
import Helps from './Helps';
import Justifications from './Justifications';
import Synthese from './Syntheses';

function Result({ result, help }: { result: ResultType; help?: Help }) {
  return (
    <>
      <Slice noPadding>
        <PacHeader />
        <h1>Résultats de votre simulation</h1>
      </Slice>

      <Synthese result={result} />
      <Justifications result={result} />
      <Gain result={result} />
      <Helps result={result} help={help} />
      <FranceRennov />
    </>
  );
}

Result.defaultProps = {
  help: null,
};

export default Result;
