import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`
export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`
