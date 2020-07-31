import styled from 'styled-components'

import colors from '../../configs/colors'

export const Container = styled.div`
  padding: 20px;
  width: 300px;
  color: ${colors.main};
  background: ${colors.background};

  border: 0;
  border-right: 3px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      #eee,
      rgba(0, 0, 0, 0)
    )
    1 100%;

  @media only screen and (max-width: 750px) {
    width: 100%;
    background: ${colors.detailBackground};
    color: ${colors.detail};
    border: 0;
  }
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 750px) {
    margin: 0;
  }
`

export const TitleContainer = styled.div`
  margin: 0;

  @media only screen and (max-width: 750px) {
    margin-left: 20px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  margin-top: 30px;

  @media only screen and (max-width: 750px) {
    margin: 0;
  }
`

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #666;
`

export const ShortBio = styled.p`
  display: block;
  margin: 40px 0;
  font-size: 14px;
  color: #999;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  list-style-type: none;

  margin: 0;
  margin-bottom: 30px;
  padding: 0;

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    margin: 0;
    margin-top: 10px;
  }
`

export const MenuItem = styled.li`
  margin: 5px 10px;
  font-size: 18px;

  a {
    text-decoration: underline;
    color: #333;
    font-weight: 600;
  }

  a:hover {
    color: #777;
  }

  @media only screen and (max-width: 750px) {
    margin: 0;

    a {
      text-decoration: none;
    }
  }
`

export const SocialContainer = styled.div`
  display: block;
  border-top: 1px solid #eee;
  width: 90%;
  margin: 20px auto;
  padding: 0px;
  padding-top: 20px;

  @media only screen and (max-width: 750px) {
    display: none;
    padding: 20px;
  }
`
