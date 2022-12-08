import React from 'react';
import { questions, steps } from '../../frontend/data/questions';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import { Answer, ValidateButton } from './Recap.styles';

const getRecap = (key: string, currentAnswer: string | string[] | null) => {
  if (currentAnswer === null) {
    return null;
  }
  const question = questions.find((q) => q.id === key);
  if (!question) {
    return currentAnswer;
  }

  switch (question.type) {
    case QuestionType.RADIO:
      return question.options.find((option) => option.value === currentAnswer)
        ?.recap;
    case QuestionType.CHECKBOX:
      return question.recap(
        question.options
          .filter((option) => currentAnswer.includes(option.value))
          .map((option) => option.recap)
      );
    case QuestionType.TEXT:
    case QuestionType.YESNO:
    case QuestionType.NUMBER:
      return question.recap(currentAnswer as string);
    default:
      return currentAnswer;
  }
};

function Recap() {
  const { currentAnswers, changeAnswer } = useStore();
  return (
    <>
      <h1>Mes réponses</h1>
      {steps.map((step) => (
        <>
          <h2>{step.label}</h2>
          {step.questions.map((question) => {
            const answer = currentAnswers.find((a) => a.id === question.id);
            if (answer && answer.value !== undefined) {
              return (
                <Answer key={answer.id} onClick={() => changeAnswer(answer.id)}>
                  {getRecap(answer.id, answer.value)}
                </Answer>
              );
            }
            return null;
          })}
        </>
      ))}
      <ValidateButton>Valider</ValidateButton>
    </>
  );
}

export default Recap;
