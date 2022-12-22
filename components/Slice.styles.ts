import styled, { css } from 'styled-components';
import Color from '../types/enum/Color';

const colors = {
  [Color.BLUE]: `
    background-color: var(--blue-france-975-sun-113);
    h1, h2, h3, h4 ,span, p {
      color: var(--blue-france-sun-113-625);
    }
  `,
  [Color.RED]: `
    background-color: #ffe8e5;
    h1, h2, h3, h4 ,span, p {
      color: #B34000;
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

export const Container = styled.div`
  padding: 32px;
  max-width: 1036px;
`;