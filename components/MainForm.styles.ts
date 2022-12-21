import { Stepper } from '@dataesr/react-dsfr';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Step = styled(Stepper)`
  width: 100%;
`;
