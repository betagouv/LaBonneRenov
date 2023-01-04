import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
`;

export const Logo = styled.div`
  background-color: white;
  align-self: stretch;
  display: flex;
  img {
    margin: auto 32px;
  }
`;

export const Info = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

export const Contact = styled.div`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
