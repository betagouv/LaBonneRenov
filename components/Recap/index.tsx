import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React from 'react';
import { questions, steps } from '../../frontend/data/questions';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import { Answer, Answers, Explanation, ValidateButton } from './index.styles';

const getRecap = (
  key: string,
  currentAnswer: string | string[] | null,
  onClick: () => void
) => {
  if (currentAnswer === null) {
    return null;
  }
  const question = questions.find((q) => q.id === key);
  if (!question) {
    return currentAnswer;
  }

  switch (question.type) {
    case QuestionType.RADIO:
      return question.options
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
};

function Recap() {
  const { currentAnswers } = useStore();
  const router = useRouter();
  return (
    <>
      <h1>Vérifier qu’une pompe à chaleur est adaptée à votre maison</h1>
      <h2>Résumé du questionnaire</h2>
      <Answers>
        {steps.map((step) =>
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
    </>
  );
}

export default observer(Recap);
