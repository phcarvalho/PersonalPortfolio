import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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

import ProfilePicture from '../../images/profile.png'

function Menu() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          subtitle
          shortbio
        }
      }
    }
  `)

  return (
    <Container>
      <TopContainer>
        <ImageContainer>
          <Link to="/">
            <img src={ProfilePicture} alt={data.site.siteMetadata.author} />
          </Link>
        </ImageContainer>
        <TitleContainer>
          <Title>{data.site.siteMetadata.author}</Title>
          <SubTitle>{data.site.siteMetadata.subtitle}</SubTitle>
        </TitleContainer>
      </TopContainer>
      <ShortBio>{data.site.siteMetadata.shortbio}</ShortBio>
      <MenuContainer>
        <MenuItem>
          <Link to="/" activeStyle={{ color: '#666' }}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" activeStyle={{ color: '#666' }}>
            About Me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" activeStyle={{ color: '#666' }}>
            Contact
          </Link>
        </MenuItem>
      </MenuContainer>
      <SocialContainer>
        <Social />
      </SocialContainer>
    </Container>
  )
}

export default Menu
