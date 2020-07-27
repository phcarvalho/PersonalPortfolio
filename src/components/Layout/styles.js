import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column; 
  }
`

export const ContentContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px;
`