import styled from 'styled-components';

export const Cards = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .fr-card__img {
    display: flex;
    align-items: center;
  }
  img {
    aspect-ratio: unset !important;
    max-height: 100px;
    width: auto;
    margin: auto;
  }
`;
