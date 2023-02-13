import Image from 'next/image';
import styled from 'styled-components';

export const PacImage = styled(Image)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 48px;
  h1 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
`;

export const HeaderDescription = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const FaqAnswer = styled.div`
  display: flex;
  gap: 24px;
`;
