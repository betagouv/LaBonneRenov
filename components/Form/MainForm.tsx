import { Button } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';
import CheckBox from './CheckBox';
import { FormContainer } from './MainForm.styles';
import Radio from './Radio';
import Text from './Text';

const getQuestion = (
  question: Question,
  answer: (value: string | string[]) => void
) => {
  switch (question.type) {
    case QuestionType.RADIO:
      return <Radio question={question} answer={answer} />;
    case QuestionType.CHECKBOX:
      return <CheckBox question={question} answer={answer} />;
    case QuestionType.TEXT:
      return <Text question={question} answer={answer} />;
    default:
      return <>Type inconnue</>;
  }
};

function MainForm() {
  const { currentQuestion, answer } = useStore();
  const [value, setValue] = useState<string | string[]>();
  if (!currentQuestion) {
    return <>Fin</>;
  }

  return (
    <FormContainer>
      {getQuestion(currentQuestion, setValue)}
      <Button
        onClick={() => {
          if (value) {
            answer(currentQuestion.id, value);
          }
        }}
        disabled={
          !value ||
          (currentQuestion.validate && !currentQuestion.validate(value))
        }
      >
        Suivant
      </Button>
    </FormContainer>
  );
}

export default observer(MainForm);
