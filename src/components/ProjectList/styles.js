import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    padding-top: 10px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  margin-left: 20px;
`

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

  list-style-type: none;

  margin: 0;
  padding: 0;

  margin-bottom: 40px;
`
