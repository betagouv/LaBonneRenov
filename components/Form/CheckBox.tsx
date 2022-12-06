import React, { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup } from '@dataesr/react-dsfr';
import { CheckBoxQuestion, QuestionProps } from '../../types/question';

function CheckBox({ question, answer }: QuestionProps<CheckBoxQuestion>) {
  const [selected, setSelected] = useState<string[]>();
  useEffect(() => {
    if (selected) {
      answer(selected);
    }
  }, [selected, answer]);

  const select = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (selected) {
        setSelected([...selected, e.target.value]);
      } else {
        setSelected([e.target.value]);
      }
    } else {
      setSelected((selected || []).filter((x) => x !== e.target.value));
    }
  };

  return (
    <CheckboxGroup legend={question.label}>
      {question.options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          value={option.value}
          onChange={select}
        />
      ))}
    </CheckboxGroup>
  );
}

export default CheckBox;
