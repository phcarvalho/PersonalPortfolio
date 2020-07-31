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
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF color={iconColor} size={iconSize} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithubAlt color={iconColor} size={iconSize} />
        </a>
      )}
      {linkedIn && (
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn color={iconColor} size={iconSize} />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter color={iconColor} size={iconSize} />
        </a>
      )}
    </Container>
  )
}

export default Social
