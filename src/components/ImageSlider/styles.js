import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`

export const FocusImage = styled.div`
  flex: 1;
  max-height: 400px;
  max-width: 100%;
  border: 1px solid #ccc;

  div {
    max-height: 400px;
    width: 100%;
  }
`

export const ThumbnailList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
  max-width: 100%;
  height: 80px;
  overflow: hidden;
  overflow-x: auto;

  * {
    flex: 1;
    margin: 0 10px;
    height: 80px;
  }
`
