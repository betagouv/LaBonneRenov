import {
  Button,
  ButtonGroup,
  Callout,
  CalloutText,
  CalloutTitle,
} from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React, {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useStore } from '../frontend/stores';
import QuestionType from '../types/enum/questionType';
import { Question } from '../types/question';
import { FormContainer } from './MainForm.styles';
import CheckBox from './Form/CheckBox';
import Radio from './Form/Radio';
import Text from './Form/Text';
import YesNo from './Form/YesNo';
import Number from './Form/Number';
import { firstQuestion } from '../frontend/data/questions';
import Recap from './Recap';

const getQuestion = (
  question: Question,
  answer: (value: string | string[]) => void,
  showError: boolean
) => {
  switch (question.type) {
    case QuestionType.RADIO:
      return (
        <Radio question={question} answer={answer} showError={showError} />
      );
    case QuestionType.CHECKBOX:
      return (
        <CheckBox question={question} answer={answer} showError={showError} />
      );
    case QuestionType.TEXT:
      return <Text question={question} answer={answer} showError={showError} />;
    case QuestionType.YESNO:
      return (
        <YesNo question={question} answer={answer} showError={showError} />
      );
    case QuestionType.YESNOUNKNOWN:
      return (
        <YesNo
          question={question}
          answer={answer}
          showError={showError}
          withUnknown
        />
      );
    case QuestionType.NUMBER:
      return (
        <Number question={question} answer={answer} showError={showError} />
      );
    default:
      return <>Type inconnue</>;
  }
};

function MainForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { currentQuestion, answer, previous, loading } = useStore();
  const [value, setValue] = useState<string | string[]>();
  const [showError, setShowError] = useState(false);

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

  if (loading) {
    return <h2>Chargement de vos réponses en cours</h2>;
  }
  return (
    <FormContainer ref={formRef} onKeyUp={onKeyUp} tabIndex={0} onSubmit={next}>
      {currentQuestion ? (
        <>
          <h1>Est-ce qu’une pompe à chaleur correspond à votre maison ?</h1>
          <h3>{currentQuestion.label}</h3>
          {getQuestion(currentQuestion, setValue, showError)}
          <ButtonGroup isInlineFrom="sm" className="fr-mb-2w">
            {currentQuestion.id !== firstQuestion && (
              <Button
                secondary
                onClick={previous}
                icon="ri-arrow-left-line"
                iconPosition="left"
              >
                Revenir à la question précédente
              </Button>
            )}
            <Button
              submit
              disabled={value === undefined}
              icon="ri-arrow-right-line"
              iconPosition="right"
            >
              Continuer
            </Button>
          </ButtonGroup>
          <Callout>
            <CalloutTitle as="h4">Le saviez-vous ?</CalloutTitle>
            <CalloutText as="div">
              <b>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </b>
              <ul>
                <li>
                  Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
                  Elit ut aliquam purus sit amet luctus venenatis lectus.
                </li>
                <li>
                  Diam volutpat commodo sed egestas egestas fringilla phasellus
                  faucibus scelerisque. Ultricies tristique nulla aliquet enim
                  tortor at auctor urna nunc.
                </li>
                <li>
                  Eget aliquet nibh praesent tristique magna sit amet purus
                  gravida.
                </li>
              </ul>
            </CalloutText>
          </Callout>
        </>
      ) : (
        <Recap />
      )}
    </FormContainer>
  );
}

export default observer(MainForm);
