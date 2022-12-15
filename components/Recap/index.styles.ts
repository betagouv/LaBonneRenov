import { Button } from '@dataesr/react-dsfr';
import styled from 'styled-components';

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Answer = styled.div`
  font-size: 20px;
  line-height: 32px;
`;

export const ClickableAnswer = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
`;

export const Explanation = styled.div`
  margin-top: 32px;
  font-size: 16px;
`;

export const ValidateButton = styled(Button)`
  margin-top: 32px;
`;
