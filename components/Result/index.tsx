import React, { useRef, useState } from 'react';
import { Result as ResultType } from '../../types/result';
import PacHeader from '../SharedLayout/PacHeader';
import Slice from '../Slice';
import Explanations from './Explanations';
import FranceRennov from './FranceRennov';
import RenoGlobal from './RenoGlobal';
import SaveResult from './SaveResult';
import Synthese from './Synthese';

function Result({ result }: { result: ResultType }) {
  const [openFranceRennov, setOpenFranceRennov] = useState(false);
  const franceRennovRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Slice padding={0}>
        <PacHeader />
        <h1>Résultats de votre simulation</h1>
      </Slice>

      <Synthese
        result={result}
        setOpenFranceRennov={setOpenFranceRennov}
        franceRennovRef={franceRennovRef}
      />
      <Explanations result={result} />
      <RenoGlobal />
      <div ref={franceRennovRef}>
        <FranceRennov openFranceRennov={openFranceRennov} />
      </div>
      <SaveResult />
    </>
  );
}

export default Result;
