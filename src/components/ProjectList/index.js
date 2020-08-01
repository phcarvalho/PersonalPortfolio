import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Container, Title, List } from './styles'

import ProjectCard from '../ProjectCard'

function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___position] }) {
        edges {
          node {
            id
            frontmatter {
              position
              techs
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark

  return (
    <Container>
      <Title>Projects</Title>
      <List>
        {edges && edges.map(({ node }) => <ProjectCard project={node} />)}
      </List>
    </Container>
  )
}

export default ProjectList
