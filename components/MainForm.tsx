import { Button, CalloutTitle } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React, {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../frontend/stores';
import QuestionType from '../types/enum/questionType';
import { Question } from '../types/question';
import {
  FormContainer,
  Step,
  Content,
  QuestionBox,
  Explanation,
  SkipLink,
  CalloutDescription,
} from './MainForm.styles';
import CheckBox from './Form/CheckBox';
import Radio from './Form/Radio';
import Text from './Form/Text';
import YesNo from './Form/YesNo';
import Number from './Form/Number';
import Recap from './Recap';
import PacHeader from './SharedLayout/PacHeader';
import Slice from './Slice';

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
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const { currentQuestion, answer, skip, loading, stepInfo } = useStore();
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
      answer(currentQuestion.id, value, router);
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
    <>
      <Slice padding={0} smallPadding={16}>
        <PacHeader />
        <h1>
          {currentQuestion
            ? 'Connaître votre situation'
            : 'Résumé du questionnaire'}
        </h1>
      </Slice>
      <Slice padding={0} smallPadding={0}>
        <FormContainer
          ref={formRef}
          onKeyUp={onKeyUp}
          tabIndex={0}
          onSubmit={next}
        >
          {currentQuestion ? (
            <>
              {stepInfo && <Step {...stepInfo} />}
              <Content>
                <QuestionBox>
                  <h3>{currentQuestion.label}</h3>
                  {getQuestion(currentQuestion, setValue, showError)}
                  <Button
                    submit
                    disabled={value === undefined}
                    icon="ri-arrow-right-line"
                    iconPosition="right"
                  >
                    Continuer
                  </Button>
                  {stepInfo && stepInfo.step.skipable && (
                    <SkipLink
                      className="fr-link"
                      onClick={() => skip(stepInfo.step.id, router)}
                    >
                      Passer ces questions
                    </SkipLink>
                  )}
                </QuestionBox>
                {currentQuestion.context && (
                  <Explanation>
                    {currentQuestion.context.map((callout, index, array) => (
                      <>
                        <CalloutTitle as="h4">{callout.title}</CalloutTitle>
                        <CalloutDescription as="div">
                          {callout.description}
                        </CalloutDescription>
                        {index !== array.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </>
                    ))}
                  </Explanation>
                )}
              </Content>
            </>
          ) : (
            <Recap />
          )}
        </FormContainer>
      </Slice>
    </>
  );
}

export default observer(MainForm);
