import styled from 'styled-components'

import colors from '../../configs/colors'

export const Container = styled.div`
  padding: 20px;
  width: 300px;
  color: ${colors.main};
  background: ${colors.background};

  border-right: 1px solid #ddd;

  @media only screen and (max-width: 900px) {
    width: 100%;
    background: ${colors.detailBackground};
    color: ${colors.detail};
  }
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
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

  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`

export const TitleContainer = styled.div`
  margin: 0;

  @media only screen and (max-width: 900px) {
    margin-left: 20px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  margin-top: 30px;

  @media only screen and (max-width: 900px) {
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
  margin: 30px 0;
  font-size: 14px;
  color: #999;

  @media only screen and (max-width: 900px) {
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

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    margin: 0;
    margin-top: 10px;
  }
`

export const MenuItem = styled.li`
  margin: 5px 10px;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
  }

  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`

export const SocialContainer = styled.div`
  display: block;
  border-top: 1px solid #eee;
  width: 90%;
  margin: 20px auto;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`
