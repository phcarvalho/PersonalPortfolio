import React from 'react'
import { Link } from 'gatsby'

import {
  Container,
  TopContainer,
  ImageContainer,
  TitleContainer,
  Title,
  SubTitle,
  ShortBio,
  MenuContainer,
  MenuItem,
  SocialContainer,
} from './styles'

import Social from '../Social'

function Menu() {
  return (
    <Container>
      <TopContainer>
        <ImageContainer>
          <img src="https://hollywood-costumes.com/wp-content/uploads/2017/05/halloween_2011-006.jpg" />
        </ImageContainer>
        <TitleContainer>
          <Title>Paulo Carvalho</Title>
          <SubTitle>Fullstack Developer</SubTitle>
        </TitleContainer>
      </TopContainer>
      <ShortBio>
        This is a short Bio. This is a short Bio. This is a short Bio. This is a
        short Bio. This is a short Bio. This is a short Bio. This is a short
        Bio.
      </ShortBio>
      <MenuContainer>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About Me</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </MenuContainer>
      <SocialContainer>
        <Social />
      </SocialContainer>
    </Container>
  )
}

export default Menu
