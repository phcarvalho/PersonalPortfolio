import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

import { Container } from './styles'

function Social() {
  const iconColor = '#333'
  const iconSize = 20

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          facebook
          github
          linkedIn
          twitter
        }
      }
    }
  `)

  const { facebook, github, linkedIn, twitter } = data.site.siteMetadata

  return (
    <Container>
      {facebook && (
        <a href={facebook}>
          <FaFacebookF color={iconColor} size={iconSize} />
        </a>
      )}
      {github && (
        <a href={github}>
          <FaGithubAlt color={iconColor} size={iconSize} />
        </a>
      )}
      {linkedIn && (
        <a href={linkedIn}>
          <FaLinkedinIn color={iconColor} size={iconSize} />
        </a>
      )}
      {twitter && (
        <a href={twitter}>
          <FaTwitter color={iconColor} size={iconSize} />
        </a>
      )}
    </Container>
  )
}

export default Social
