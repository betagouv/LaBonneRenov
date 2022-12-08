import { TextInput } from '@dataesr/react-dsfr';
import React from 'react';
import { QuestionProps, TextQuestion } from '../../types/question';

function Text({ question, answer, showError }: QuestionProps<TextQuestion>) {
  return (
    <TextInput
      label={question.label}
      placeholder={question.placeholder}
      onChange={(e) => {
        answer(e.target.value);
      }}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    />
  );
}

export default Text;
