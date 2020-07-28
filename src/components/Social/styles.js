import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`
