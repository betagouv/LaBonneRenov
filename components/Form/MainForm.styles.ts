import { Stepper } from '@dataesr/react-dsfr';
import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 1200px;
  margin: 32px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Step = styled(Stepper)`
  width: 100%;
`;
