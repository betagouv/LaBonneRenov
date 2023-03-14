import { Button, TextInput } from '@dataesr/react-dsfr';
import React from 'react';
import Color from '../../types/enum/Color';
import Slice from '../Slice';

function SaveResult() {
  const id = window.localStorage.getItem('questionnaires_id');
  return id ? (
    <Slice color={Color.BLUE}>
      <h3>
        Retrouvez le résultat de votre simulation et le parcours de travaux
      </h3>
      <TextInput
        label="Lien vers votre résultat"
        value={`labonnerenov.gouv.fr/pac/resultat?id=${id}`}
      />
      <Button
        secondary
        onClick={() =>
          navigator.clipboard.writeText(
            `labonnerenov.gouv.fr/pac/resultat?id=${id}`
          )
        }
      >
        Copier le lien
      </Button>
    </Slice>
  ) : null;
}

export default SaveResult;
