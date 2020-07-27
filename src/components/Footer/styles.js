import styled from 'styled-components';

export const Container = styled.footer`
  visibility: hidden;

  width: 100%;
  height: 80px;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    visibility: visible;
  }
`;