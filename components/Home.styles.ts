import styled from 'styled-components';

export const Landing = styled.div`
  background-color: var(--blue-france-975-sun-113);

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 166px);
  @media (min-width: 768px) {
    height: calc(100vh - 116.5px);
  }
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 1036px;
`;

export const Title = styled.h1`
  color: var(--blue-france-sun-113-625);
  font-size: 80px !important;
  font-weight: 700 !important;
  line-height: 88px !important;
`;

export const Description = styled.h4`
  color: var(--blue-france-sun-113-625);
`;
