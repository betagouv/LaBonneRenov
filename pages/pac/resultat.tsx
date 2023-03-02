import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Result from '../../components/Result';
import agent from '../../frontend/services/agent';
import simulator from '../../frontend/services/simulator';
import helpSimulator from '../../frontend/services/simulator/fundings';
import { useStore } from '../../frontend/stores';
import { Help } from '../../types/help';
import { Result as ResultType } from '../../types/result';

function Resultat() {
  const [result, setResult] = useState<ResultType>();
  const [help, setHelp] = useState<Help>();
  const { loading, currentAnswers, id } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (id && !loading && currentAnswers) {
      try {
        setResult(simulator(currentAnswers));
        setHelp(helpSimulator(currentAnswers) || undefined);
      } catch (e) {
        console.log('Something went wrong while computing the answers', e);
        router.push('/pac');
      }
    }
  }, [id, loading, currentAnswers, router]);

  useEffect(() => {
    if (id && result) {
      agent.Answers.result(id);
    }
  }, [id, result]);

  return result ? (
    <Result result={result} help={help} />
  ) : (
    <>Analyse de vos réponses en cours...</>
  );
}

export default observer(Resultat);
