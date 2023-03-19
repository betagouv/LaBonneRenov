import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  h6 {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  h3 {
    margin-bottom: 0 !important;
  }
  img {
    width: 57px;
    height: 57px;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  span {
    margin-top: 8px;
  }
  h5 {
    margin-bottom: 0 !important;
  }
`;

export const RedSubTitle = styled(SubTitle)`
  color: #ce0500;
`;

export const Answer = styled.div`
  display: flex;
  justify-content: space-between;
`;
