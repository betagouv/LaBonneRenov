import { TextInput } from '@dataesr/react-dsfr';
import React from 'react';
import { NumberQuestion, QuestionProps } from '../../types/question';

function Number({ question, answer }: QuestionProps<NumberQuestion>) {
  return (
    <TextInput
      type="number"
      label={question.label}
      placeholder={question.placeholder}
      step={question.step}
      min={question.min}
      max={question.max}
      onChange={(e) => answer(e.target.value)}
    />
  );
}

export default Number;
