import React from 'react';
import { Radio, RadioGroup } from '@dataesr/react-dsfr';
import { QuestionProps, YesNoQuestion } from '../../types/question';

function YesNo({ question, answer }: QuestionProps<YesNoQuestion>) {
  return (
    <RadioGroup
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(value)}
    >
      <Radio label="Oui" value="true" />
      <Radio label="Non" value="false" />
    </RadioGroup>
  );
}

export default YesNo;
