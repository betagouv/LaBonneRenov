import React from 'react';
import { Radio as RadioDSFR, RadioGroup } from '@dataesr/react-dsfr';
import { QuestionProps, RadioQuestion } from '../../types/question';
import { useStore } from '../../frontend/stores';

function Radio({ question, answer, showError }: QuestionProps<RadioQuestion>) {
  const { currentAnswers } = useStore();
  return (
    // @ts-ignore: Optionnal legend in react-dsfr
    <RadioGroup
      key={question.id}
      name={question.id}
      onChange={(value) => answer(value)}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    >
      {(typeof question.options === 'function'
        ? question.options(currentAnswers)
        : question.options
      ).map((option) => (
        <RadioDSFR
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioGroup>
  );
}

export default Radio;
