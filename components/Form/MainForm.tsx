import { Button, ButtonGroup } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useStore } from '../../frontend/stores';
import QuestionType from '../../types/enum/questionType';
import { Question } from '../../types/question';
import CheckBox from './CheckBox';
import { Error, FormContainer } from './MainForm.styles';
import Radio from './Radio';
import Text from './Text';
import YesNo from './YesNo';
import Number from './Number';
import { firstQuestion } from '../../frontend/data/questions';

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
    case QuestionType.YESNO:
      return <YesNo question={question} answer={answer} />;
    case QuestionType.NUMBER:
      return <Number question={question} answer={answer} />;
    default:
      return <>Type inconnue</>;
  }
};

function MainForm() {
  const { currentQuestion, answer, previous } = useStore();
  const [value, setValue] = useState<string | string[]>();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setValue(undefined);
  }, [currentQuestion]);

  useEffect(() => {
    setShowError(false);
  }, [value]);

  const hasError = useMemo(() => {
    if (value === undefined || !currentQuestion) {
      return false;
    }

    return currentQuestion.validate && !currentQuestion.validate(value);
  }, [currentQuestion, value]);

  if (!currentQuestion) {
    return <>Fin</>;
  }

  return (
    <FormContainer>
      {getQuestion(currentQuestion, setValue)}
      <ButtonGroup isInlineFrom="sm">
        {currentQuestion.id !== firstQuestion && (
          <Button secondary onClick={previous}>
            Précédent
          </Button>
        )}
        <Button
          onClick={() => {
            if (hasError) {
              setShowError(true);
            } else if (value !== undefined) {
              answer(currentQuestion.id, value);
            }
          }}
          disabled={value === undefined}
        >
          Suivant
        </Button>
      </ButtonGroup>
      {showError && <Error>{currentQuestion.error}</Error>}
    </FormContainer>
  );
}

export default observer(MainForm);
