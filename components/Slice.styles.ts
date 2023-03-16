import styled, { css } from 'styled-components';
import Color from '../types/enum/Color';

const colors = {
  [Color.BLUE]: `
    background-color: var(--blue-france-975-sun-113);
    h1, h2, h3, h4, div, p {
      color: var(--blue-france-sun-113-625);
    }
  `,
  [Color.RED]: `
    background-color: #ffe8e5;
    h1, h2, h3, h4, div, p {
      color: #B34000;
    }
    `,
  [Color.GRAY]: `
    background-color: #F6F6F6;
    h1, h2, h3, h4, div, p {
      color: #161616;
    }
    `,
};

export const Background = styled.div<{ color?: Color; fullHeight?: boolean }>`
  ${({ color }) => (color ? colors[color] : 'background-color: white;')};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: calc(100vh - 166px);
      @media (min-width: 768px) {
        height: calc(100vh - 116.5px);
      }
    `}
`;

export const Container = styled.div<{ padding: number; smallPadding: number }>`
  width: 100%;
  ${({ smallPadding }) =>
    smallPadding !== undefined && `padding: ${smallPadding}px 0;`}

  @media (min-width: 768px) {
    ${({ padding }) => padding !== undefined && `padding: ${padding}px 0;`}
  }
`;
