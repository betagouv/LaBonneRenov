import React from 'react';
import { Radio, RadioGroup } from '@dataesr/react-dsfr';
import {
  QuestionProps,
  YesNoQuestion,
  YesNoUnknownQuestion,
} from '../../types/question';

function YesNo({
  question,
  answer,
  showError,
  withUnknown,
}: QuestionProps<YesNoQuestion | YesNoUnknownQuestion> & {
  withUnknown?: boolean;
}) {
  return (
    <RadioGroup
      key={question.id}
      name={question.id}
      legend={question.label}
      onChange={(value) => answer(value)}
      message={question.error}
      messageType={showError ? 'error' : undefined}
    >
      <Radio label="Oui" value="true" />
      <Radio label="Non" value="false" />
      {withUnknown && <Radio label="Je ne sais pas" value="unknown" />}
    </RadioGroup>
  );
}

YesNo.defaultProps = {
  withUnknown: false,
};

export default YesNo;
