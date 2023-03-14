import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { steps } from '../../frontend/data/questions';
import { useStore } from '../../frontend/stores';
import { Answer as AnswerType } from '../../types/answer';
import QuestionType from '../../types/enum/questionType';
import {
  Answer,
  Answers,
  Content,
  Explanation,
  ValidateButton,
} from './index.styles';

export const getRecap = (
  currentAnswers: AnswerType[],
  key: string,
  currentAnswer: string | string[] | null,
  onClick: () => void,
  externalLink?: boolean
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
        ?.recap(onClick, externalLink);
    case QuestionType.CHECKBOX:
      return question.recap(
        question.options
          .filter((option) => currentAnswer.includes(option.value))
          .map((option) => option.recap),
        onClick,
        externalLink
      );
    case QuestionType.YESNO:
      return question.recap(currentAnswer === 'true', onClick, externalLink);
    case QuestionType.YESNOUNKNOWN:
      return question.recap(currentAnswer as string, onClick, externalLink);
    case QuestionType.TEXT:
    case QuestionType.NUMBER:
      return question.recap(currentAnswer as string, onClick, externalLink);
    default:
      return currentAnswer;
  }
};

function Recap() {
  const { currentAnswers, skippedGroup, updateQuestion } = useStore();
  const router = useRouter();

  useEffect(() => {
    updateQuestion(router);
  }, []);

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
                      {getRecap(currentAnswers, answer.id, answer.value, () =>
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
