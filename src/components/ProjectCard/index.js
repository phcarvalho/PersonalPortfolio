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
    <Container key={project.fields.slug}>
      <Link to={project.fields.slug}>
        <ImageContainer>
          <img src={project.imageUrl} />
        </ImageContainer>
        <ContentContainer>
          <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
          <TechList>
            {project.frontmatter.techs &&
              project.frontmatter.techs.map(tech => (
                <TechItem>{tech}</TechItem>
              ))}
          </TechList>
        </ContentContainer>
      </Link>
    </Container>
  )
}

export default ProjectCard
