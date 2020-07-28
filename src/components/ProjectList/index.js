import React from 'react'

import { Container, Title, List } from './styles'

import ProjectCard from '../ProjectCard'

function ProjectList({ projects }) {
  return (
    <Container>
      <Title>Projects</Title>
      <List>
        {projects && projects.map(project => <ProjectCard project={project} />)}
      </List>
    </Container>
  )
}

export default ProjectList
