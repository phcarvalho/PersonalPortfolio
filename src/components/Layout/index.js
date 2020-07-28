import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, ContentContainer } from './styles'
import GlobalStyle from './globalStyle'

import Menu from '../Menu'
import Footer from '../Footer'

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          subtitle
          facebook
          github
          linkedIn
          twitter
        }
      }
    }
  `)

  const { author, subtitle } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle />
      <Container>
        <Menu
          data={{
            author,
            subtitle,
          }}
        />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
