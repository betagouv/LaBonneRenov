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
  flex-direction: column;
  gap: 48px;
  align-items: center;
  h1 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderDescription = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Hint = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #161616;
`;
