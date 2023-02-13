import { Callout, Stepper } from '@dataesr/react-dsfr';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 64px auto;
  padding: 0 32px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Step = styled(Stepper)`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const QuestionBox = styled.div`
  padding: 32px;
  border: 1px solid #dddddd;
  flex-grow: 1;
`;

export const Explanation = styled(Callout)`
  width: 375px;
`;
