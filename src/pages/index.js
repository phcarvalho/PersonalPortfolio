import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectList from '../components/ProjectList'

const projects = [
  {
    title: 'My project title',
    imageUrl:
      'https://st4.depositphotos.com/23084244/38929/v/1600/depositphotos_389294168-stock-illustration-key-icon-your-project.jpg',
    url: 'url',
    techs: ['NodeJS', 'React', 'Gatsby'],
  },
  {
    title: 'My project title',
    imageUrl:
      'https://st4.depositphotos.com/23084244/38929/v/1600/depositphotos_389294168-stock-illustration-key-icon-your-project.jpg',
    url: 'url',
    techs: ['NodeJS', 'React', 'Gatsby', 'Express'],
  },
  {
    title: 'My project title',
    imageUrl:
      'https://st4.depositphotos.com/23084244/38929/v/1600/depositphotos_389294168-stock-illustration-key-icon-your-project.jpg',
    url: 'url',
    techs: ['NodeJS', 'React', 'Gatsby'],
  },
  {
    title: 'My project title',
    imageUrl:
      'https://st4.depositphotos.com/23084244/38929/v/1600/depositphotos_389294168-stock-illustration-key-icon-your-project.jpg',
    url: 'url',
    techs: ['NodeJS', 'React', 'Gatsby'],
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectList projects={projects} />
  </Layout>
)

export default IndexPage
