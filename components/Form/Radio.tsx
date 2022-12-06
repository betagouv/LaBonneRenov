import React from 'react';
import { Radio as RadioDSFR, RadioGroup } from '@dataesr/react-dsfr';
import { RadioQuestion } from '../../types/question';

function Radio({
  question,
  answer,
}: {
  question: RadioQuestion;
  answer: (id: string, value: string) => void;
}) {
  return (
    <RadioGroup
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(question.id, value)}
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
