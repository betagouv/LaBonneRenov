import { Button, ButtonGroup } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React, {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import Recap from './Recap';

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
  const formRef = useRef<HTMLFormElement>(null);
  const { currentQuestion, answer, previous, init } = useStore();
  const [value, setValue] = useState<string | string[]>();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    init(window.localStorage.getItem('answers'));
  }, [init]);

  useEffect(() => {
    setValue(undefined);
  }, [currentQuestion]);

  useEffect(() => {
    setShowError(false);
  }, [value]);

  useEffect(() => {
    if (formRef.current) {
      // formRef.current.focus();
    }
  }, [formRef, currentQuestion]);

  const hasError = useMemo(() => {
    if (value === undefined || !currentQuestion) {
      return false;
    }

    return currentQuestion.validate && !currentQuestion.validate(value);
  }, [currentQuestion, value]);

  const next = (e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (hasError) {
      setShowError(true);
    } else if (value !== undefined && currentQuestion) {
      answer(currentQuestion.id, value);
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLFormElement>) => {
    switch (e.key) {
      default:
        console.log(e.key);
        break;
    }
  };

  return (
    <FormContainer ref={formRef} onKeyUp={onKeyUp} tabIndex={0} onSubmit={next}>
      {currentQuestion ? (
        <>
          {getQuestion(currentQuestion, setValue)}
          <ButtonGroup isInlineFrom="sm">
            {currentQuestion.id !== firstQuestion && (
              <Button secondary onClick={previous}>
                Précédent
              </Button>
            )}
            <Button submit disabled={value === undefined}>
              Suivant
            </Button>
          </ButtonGroup>
          {showError && <Error>{currentQuestion.error}</Error>}
        </>
      ) : (
        <Recap />
      )}
    </FormContainer>
  );
}

export default observer(MainForm);
