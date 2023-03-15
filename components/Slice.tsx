import React, { ReactNode } from 'react';
import Color from '../types/enum/Color';
import { Background, Container } from './Slice.styles';

function Slice({
  color,
  fullHeight,
  padding = 32,
  smallPadding = 32,
  children,
}: {
  color?: Color;
  fullHeight?: boolean;
  padding?: number;
  smallPadding?: number;
  children: ReactNode;
}) {
  return (
    <Background color={color} fullHeight={fullHeight}>
      <Container padding={padding} smallPadding={smallPadding}>
        {children}
      </Container>
    </Background>
  );
}

Slice.defaultProps = {
  color: undefined,
  fullHeight: false,
  padding: 32,
  smallPadding: 32,
};

export default Slice;
