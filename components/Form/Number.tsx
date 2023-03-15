import { TextInput } from '@dataesr/react-dsfr';
import React from 'react';
import { NumberQuestion, QuestionProps } from '../../types/question';

function Number({
  question,
  answer,
  showError,
}: QuestionProps<NumberQuestion>) {
  return (
    <TextInput
      type="number"
      label=" "
      hint={question.placeholder}
      step={question.step}
      min={question.min}
      max={question.max}
      onChange={(e) => answer(e.target.value)}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    />
  );
}

export default Number;
