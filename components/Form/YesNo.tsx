import React from 'react';
import { Radio, RadioGroup } from '@dataesr/react-dsfr';
import { QuestionProps, YesNoQuestion } from '../../types/question';

function YesNo({ question, answer, showError }: QuestionProps<YesNoQuestion>) {
  return (
    <RadioGroup
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(value)}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    >
      <Radio label="Oui" value="true" />
      <Radio label="Non" value="false" />
    </RadioGroup>
  );
}

export default YesNo;
