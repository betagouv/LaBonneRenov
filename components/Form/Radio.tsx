import React from 'react';
import { Radio as RadioDSFR, RadioGroup } from '@dataesr/react-dsfr';
import { QuestionProps, RadioQuestion } from '../../types/question';

function Radio({ question, answer, showError }: QuestionProps<RadioQuestion>) {
  return (
    <RadioGroup
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(value)}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    >
      {question.options.map((option) => (
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
