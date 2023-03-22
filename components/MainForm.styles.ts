import { Callout, CalloutText, Stepper } from '@dataesr/react-dsfr';
import styled from 'styled-components';

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
  margin-bottom: 24px;
`;

export const Explanation = styled(Callout)`
  width: 375px;
  max-width: 100%;
`;

export const SkipLink = styled.button`
  float: right;
  text-decoration: underline;
`;

export const CalloutDescription = styled(CalloutText)`
  text-align: justify;
  p {
    margin-bottom: 8px;
  }
`;
