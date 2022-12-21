import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Result from '../../components/Result';
import simulator from '../../frontend/services/simulator';
import { useStore } from '../../frontend/stores';
import { Result as ResultType } from '../../types/result';

function Resultat() {
  const [result, setResult] = useState<ResultType>();
  const { currentAnswers } = useStore();
  const router = useRouter();
  useEffect(() => {
    if (currentAnswers) {
      try {
        setResult(simulator(currentAnswers));
      } catch (e) {
        console.log('Something went wrong while computing the answers', e);
        router.push('/pac');
      }
    }
  }, [currentAnswers, router]);
  return result ? (
    <Result result={result} />
  ) : (
    <>Analyse de vos réponses en cours...</>
  );
}

export default observer(Resultat);
