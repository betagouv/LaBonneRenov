import styled from 'styled-components';

export const Header = styled.div`
  justify-content: space-between;
  align-items: center;

  display: none;
  @media (min-width: 768px) {
    display: flex;
  }

  nav {
    margin-bottom: 16px;
  }
`;
