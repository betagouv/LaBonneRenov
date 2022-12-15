import { Stepper } from '@dataesr/react-dsfr';
import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 1200px;
  margin: 64px auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Hint = styled.div`
  display: flex;
  margin-bottom: 24px;
  span {
    color: var(--blue-france-113);
  }
`;

export const Step = styled(Stepper)`
  width: 100%;
`;
