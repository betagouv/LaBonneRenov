import { Button, TextInput } from '@dataesr/react-dsfr';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../frontend/stores';
import Color from '../../types/enum/Color';
import Slice from '../Slice';

function SaveResult() {
  const { id } = useStore();
  return id ? (
    <Slice color={Color.BLUE}>
      <h3>
        Retrouvez le résultat de votre simulation et le parcours de travaux
      </h3>
      <TextInput
        label="Lien vers votre résultat"
        value={`labonnerenov.fr/pac/resultat?id=${id}`}
      />
      <Button
        secondary
        onClick={() =>
          navigator.clipboard.writeText(`labonnerenov.fr/pac/resultat?id=${id}`)
        }
      >
        Copier le lien
      </Button>
    </Slice>
  ) : null;
}

export default observer(SaveResult);
