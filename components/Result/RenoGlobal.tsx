import React from 'react';
import Color from '../../types/enum/Color';
import { HeaderContent, PacImage } from '../PacHome.styles';
import Slice from '../Slice';

function RenoGlobal() {
  return (
    <Slice color={Color.GRAY}>
      <HeaderContent>
        <PacImage
          width={315}
          height={256}
          src="/images/reno-globale.svg"
          alt="Rénovation globale"
        />
        <div>
          <h2>Pourquoi la rénovation performante ?</h2>
          <ul>
            <li>Obtenez des financements supplémentaires</li>
            <li>Réduisez vos factures d&lsquo;énergie</li>
            <li>Revalorisez votre bien en cas de revente</li>
            <li>Retrouvez un confort thermique au quotidien </li>
          </ul>
        </div>
      </HeaderContent>
    </Slice>
  );
}

export default RenoGlobal;
