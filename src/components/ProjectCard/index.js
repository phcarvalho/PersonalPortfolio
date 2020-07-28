import React from 'react'
import { Link } from 'gatsby'

import {
  Container,
  ImageContainer,
  ContentContainer,
  ProjectTitle,
  TechList,
  TechItem,
} from './styles'

function ProjectCard({ project }) {
  return (
    <Container>
      <Link to={project.url}>
        <ImageContainer>
          <img src={project.imageUrl} />
        </ImageContainer>
        <ContentContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <TechList>
            {project.techs &&
              project.techs.map(tech => <TechItem>{tech}</TechItem>)}
          </TechList>
        </ContentContainer>
      </Link>
    </Container>
  )
}

export default ProjectCard
