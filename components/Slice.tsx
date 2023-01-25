import React, { ReactNode } from 'react';
import Color from '../types/enum/Color';
import { Background, Container } from './Slice.styles';

function Slice({
  color,
  fullHeight,
  noPadding,
  children,
}: {
  color?: Color;
  fullHeight?: boolean;
  noPadding?: boolean;
  children: ReactNode;
}) {
  return (
    <Background color={color} fullHeight={fullHeight}>
      <Container noPadding={noPadding}>{children}</Container>
    </Background>
  );
}

Slice.defaultProps = {
  color: undefined,
  fullHeight: false,
  noPadding: false,
};

export default Slice;
