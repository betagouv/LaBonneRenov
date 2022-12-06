import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';
import { FormContainer } from './MainForm.styles';
import Radio from './Radio';

const getQuestion = (
  question: Question,
  answer: (id: string, value: string) => void
) => {
  switch (question.type) {
    case QuestionType.RADIO:
      return <Radio question={question} answer={answer} />;
      break;
    default:
      return <>Type inconnue</>;
  }
};

function MainForm() {
  const { currentQuestion, answer } = useStore();

  if (!currentQuestion) {
    return <>Fin</>;
  }
  return <FormContainer>{getQuestion(currentQuestion, answer)}</FormContainer>;
}

export default observer(MainForm);
