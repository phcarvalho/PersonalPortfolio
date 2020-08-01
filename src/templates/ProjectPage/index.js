import React from 'react'
import { graphql } from 'gatsby'

import { Container } from './styles'

import Layout from '../../components/Layout'
import ImageSlider from '../../components/ImageSlider'

function ProjectPage({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <ImageSlider images={data.allFile.edges} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $imageFolder: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        techs
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: $imageFolder }
      }
      sort: { fields: sourceInstanceName }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          base
        }
      }
    }
  }
`

export default ProjectPage
