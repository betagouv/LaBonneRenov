import React from 'react';
import { Radio as RadioDSFR, RadioGroup } from '@dataesr/react-dsfr';
import { QuestionProps, RadioQuestion } from '../../types/question';

function Radio({ question, answer }: QuestionProps<RadioQuestion>) {
  return (
    <RadioGroup
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(value)}
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
