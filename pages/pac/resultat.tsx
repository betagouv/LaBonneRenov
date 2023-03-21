import { observer } from 'mobx-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Result from '../../components/Result';
import agent from '../../frontend/services/agent';
import simulator from '../../frontend/services/simulator';
import { useStore } from '../../frontend/stores';
import { Result as ResultType } from '../../types/result';

function Resultat() {
  const [result, setResult] = useState<ResultType>();
  const { loading, currentAnswers, id, init } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (router.query.id && id !== router.query.id) {
      init(router.query.id as string);
    } else if (id && !loading && currentAnswers) {
      try {
        setResult(simulator(currentAnswers));
      } catch (e) {
        console.log('Something went wrong while computing the answers', e);
        router.push('/pac');
      }
    }
  }, [id, loading, currentAnswers, router, init]);

  useEffect(() => {
    if (id && result) {
      agent.Answers.result(id);
    }
  }, [id, result]);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="a773553c-07e5-4c2e-b0f7-f7946ce35435";
              (function(){d=document;s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
              })();`,
          }}
        />
      </Head>
      {result ? (
        <Result result={result} />
      ) : (
        <>Analyse de vos réponses en cours...</>
      )}
    </>
  );
}

export default observer(Resultat);
