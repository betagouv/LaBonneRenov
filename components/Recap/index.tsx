import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { steps } from '../../frontend/data/questions';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import {
  Answer,
  Answers,
  Content,
  Explanation,
  ValidateButton,
} from './index.styles';

function Recap() {
  const { currentAnswers, skippedGroup, updateQuestion } = useStore();
  const router = useRouter();

  useEffect(() => {
    updateQuestion(router);
  }, []);

  const getRecap = useCallback(
    (
      key: string,
      currentAnswer: string | string[] | null,
      onClick: () => void
    ) => {
      if (currentAnswer === null) {
        return null;
      }
      const question = steps
        .flatMap((step) => step.questions)
        .find((q) => q.id === key);

      if (!question) {
        return currentAnswer;
      }

      switch (question.type) {
        case QuestionType.RADIO:
          return (
            typeof question.options === 'function'
              ? question.options(currentAnswers)
              : question.options
          )
            .find((option) => option.value === currentAnswer)
            ?.recap(onClick);
        case QuestionType.CHECKBOX:
          return question.recap(
            question.options
              .filter((option) => currentAnswer.includes(option.value))
              .map((option) => option.recap),
            onClick
          );
        case QuestionType.YESNO:
          return question.recap(currentAnswer === 'true', onClick);
        case QuestionType.YESNOUNKNOWN:
          return question.recap(currentAnswer as string, onClick);
        case QuestionType.TEXT:
        case QuestionType.NUMBER:
          return question.recap(currentAnswer as string, onClick);
        default:
          return currentAnswer;
      }
    },
    [currentAnswers]
  );

  return (
    <>
      <h1>Résumé du questionnaire</h1>
      <Content>
        <Answers>
          {steps
            .filter((step) => !skippedGroup.includes(step.id))
            .map((step) =>
              step.questions.map((question) => {
                const answer = currentAnswers.find((a) => a.id === question.id);
                if (answer && answer.value !== undefined) {
                  return (
                    <Answer key={answer.id}>
                      {getRecap(answer.id, answer.value, () =>
                        router.push(`/pac/${answer.id}`)
                      )}
                    </Answer>
                  );
                }
                return null;
              })
            )}
        </Answers>
        <Explanation>
          <b>Cela ne vous correspond pas ?</b> Cliquez sur la valeur que vous
          souhaitez modifier.
        </Explanation>
        <ValidateButton
          icon="ri-arrow-right-line"
          iconPosition="right"
          onClick={() => router.push('/pac/resultat')}
        >
          Voir le résultat
        </ValidateButton>
      </Content>
    </>
  );
}

export default observer(Recap);
