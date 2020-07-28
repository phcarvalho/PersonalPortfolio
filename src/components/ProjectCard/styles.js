import styled from 'styled-components'

export const Container = styled.li`
  margin: 20px;

  a {
    display: flex;
    height: 130px;
    width: 330px;
    background: #ddd;

    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`

export const ImageContainer = styled.div`
  height: 100%;

  img {
    max-height: 100%;
  }
`

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`

export const ProjectTitle = styled.h1`
  flex: 1;
  font-size: 26px;
  margin: 0;
`

export const TechList = styled.ul`
  flex: 0.7;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  list-style-type: none;

  margin: 0;
  padding: 0;
`

export const TechItem = styled.li`
  padding: 5px 7px;
  border-radius: 15px;
  background: #16262e;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  margin: 3px;
`
