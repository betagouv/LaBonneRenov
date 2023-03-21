import { Button, TextInput } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../frontend/stores';
import Color from '../../types/enum/Color';
import Slice from '../Slice';
import { Result } from './SaveResult.styles';

function SaveResult() {
  const { id } = useStore();
  return id ? (
    <Slice color={Color.BLUE}>
      <h3>
        Retrouvez le résultat de votre simulation et le parcours de travaux
      </h3>
      <Result>
        <TextInput
          label="Lien vers votre résultat"
          value={`${process.env.NEXT_PUBLIC_SITE_NAME}/pac/resultat?id=${id}`}
          onChange={() => {}}
        />
        <Button
          secondary
          onClick={() =>
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_SITE_NAME}/pac/resultat?id=${id}`
            )
          }
        >
          Copier le lien
        </Button>
      </Result>
    </Slice>
  ) : null;
}

export default observer(SaveResult);
