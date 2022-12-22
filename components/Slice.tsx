import React, { ReactNode } from 'react';
import Color from '../types/enum/Color';
import { Background, Container } from './Slice.styles';

function Slice({
  color,
  fullHeight,
  children,
}: {
  color?: Color;
  fullHeight?: boolean;
  children: ReactNode;
}) {
  return (
    <Background color={color} fullHeight={fullHeight}>
      <Container>{children}</Container>
    </Background>
  );
}

Slice.defaultProps = {
  color: undefined,
  fullHeight: false,
};

export default Slice;
